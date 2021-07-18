https://googleprojectzero.blogspot.com/2019/04/virtually-unlimited-memory-escaping.html

Exploits [CVE-2019-7582](https://nvd.nist.gov/vuln/detail/CVE-2019-5782) and [CVE-2019-13768/P0 issue 1755](https://bugs.chromium.org/p/project-zero/issues/detail?id=1755)

Targets [Chrome 71.0.3578.98](https://web.archive.org/web/20190802133545/http://r2---sn-a5mlrn7k.gvt1.com/edgedl/release2/chrome/AO196ErPGQUF_71.0.3578.98/71.0.3578.98_chrome_installer.exe?mip=207.241.225.236&mvi=1&pl=20&shardbypass=yes&redirect_counter=1&cm2rm=sn-n4ved7z&req_id=c8354c1c8c157341&cms_redirect=yes&mm=34&mn=sn-a5mlrn7k&ms=ltu&mt=1564752822&mv=m)

Needed to update the [original PoC](https://bugs.chromium.org/p/project-zero/issues/detail?id=1755#c3) to work on Windows 10 1909+.

Also needed to increase reliability on a particular target machine where the original PoC had ~0% reliability (but had ~100% on another target) 


# Install Dependencies
```
wget https://bootstrap.pypa.io/pip/2.7/get-pip.py -o get-pip.py
python2 get-pip.py
pip2 install cherrypy
```

# Run

`python2 server.py`

# PoC changes:

Replacement of the freed object was not happening so increased the number of allocated 0x140 sized blocks from 0x88 to 0x8000. 

Allocation of page at 0x40404040000 was not happening so increased the number of allocated pages from 0xc88 to 2*0xc88

The ROP gadget `mov rcx, rax ; mov rax, rcx ; add rsp, 28h ; ret` is no longer present in ntdll.dll on Windows 1909. Instead the ROP gadgets `mov rcx, rax ; test rcx, rcx ; setne al ; ret` and `mov rax, rcx ; add rsp, 0x28 ; ret` in shell32.dll are used.

`pipe.producer.close()` was causing the sprayed 0x140 sized blocks to be freed. Memory was getting cleaned up too quickly. So the function call was delayed until after the exploit completes.

Shellcode was changed so that an arbitrary command (upto shellcode length 0x200) can be used. To edit the shellcode either modify shellcode.asm and run `yasm -f bin -o shellcode.bin shellcode.asm` or hexedit the commandline string into shellcode.bin. Current payload command is `calc`
