function pe64(oob, ptr) {
  ptr = ptr & 0xffffffffffff0000n;
  var dword = oob.getUint32(ptr);

  while ((dword & 0xffff) != 0x5a4d) {
    ptr -= 0x10000n;
    dword = oob.getUint32(ptr);
  }

  this.oob = oob;
  this.base = ptr;
  this.section_bytes = new Map();

  this.parse_headers = function() {
    this.dos_header_ptr = this.base;
    let e_lfanew = oob.getUint32(this.dos_header_ptr + 60n);

    this.nt_header_ptr = this.dos_header_ptr + BigInt(e_lfanew);
    let nt_magic = oob.getUint32(this.nt_header_ptr);
    if (nt_magic != 0x00004550) {
      this.dos_header_ptr = 0n;
      this.nt_header_ptr = 0n;
      return false;
    }

    //print('  nt_header: 0x' + this.nt_header_ptr.toString(16));

    this.file_header_ptr = this.nt_header_ptr + 4n;
    let machine = oob.getUint32(this.file_header_ptr);
    if ((machine & 0xffff) != 0x8664) {
      this.dos_header_ptr = 0n;
      this.nt_header_ptr = 0n;
      this.file_header_ptr = 0n;
      return false;
    }

    //print('  file_header: 0x' + this.file_header_ptr.toString(16));

    this.opt_header_ptr = this.nt_header_ptr + 24n;
    let opt_magic = oob.getUint32(this.opt_header_ptr);
    if ((opt_magic & 0xffff) != 0x20b) {
      this.dos_header_ptr = 0n;
      this.nt_header_ptr = 0n;
      this.file_header_ptr = 0n;
      this.opt_header_ptr = 0n;
      return false;
    }

    //print('  opt_header: 0x' + this.opt_header_ptr.toString(16));

    return true;
  }

  this.getUint16 = function(rva) {
    return oob.getUint16(this.base + BigInt(rva));
  }

  this.getUint32 = function(rva) {
    return oob.getUint32(this.base + BigInt(rva));
  }

  this.getUint64 = function(rva) {
    return oob.getUint64(this.base + BigInt(rva));
  }

  this.getString = function(rva) {
    var string = '';
    var byte = this.oob.getUint8(this.base + BigInt(rva));
    while (byte != 0 && string.length < 0x100) {
      string += String.fromCharCode(byte);
      rva += 1;
      byte = this.oob.getUint8(this.base + BigInt(rva));
    }
    return string;
  }

  this.getImport = function(import_module, import_function) {
    if (this.dos_header_ptr == 0n || this.opt_header_ptr == 0n) {
      return 0n;
    }

    let data_directory_ptr = this.opt_header_ptr + 112n;
    
    let import_dir_ptr = data_directory_ptr + 8n;
    let import_rva = this.oob.getUint32(import_dir_ptr);
    let import_size = this.oob.getUint32(import_dir_ptr + 4n);
    if (import_size == 0) {
      return 0n;
    }

    while (true) {
      var orig_first_thunk_rva = this.getUint32(import_rva);
      if (orig_first_thunk_rva == 0) {
        return 0n;
      }

      let module_name_rva = this.getUint32(import_rva + 12);
      let module_name = this.getString(module_name_rva);
      //print(module_name);
      if (module_name == import_module) {
        break;
      }

      import_rva += 20;
      orig_first_thunk_rva = this.getUint32(import_rva);
    }

    var first_thunk_rva = this.getUint32(import_rva + 16);
    var thunk_rva = orig_first_thunk_rva;
    while (true) {
      var import_by_name_rva = this.getUint32(thunk_rva);
      if (import_by_name_rva == 0) {
        return 0n;
      }

      var function_name_rva = import_by_name_rva + 2;
      var function_name = this.getString(function_name_rva);
      //print(function_name);
      if (function_name == import_function) {
        return this.getUint64(first_thunk_rva);
      }

      first_thunk_rva += 8;
      thunk_rva += 8;
    }
  }

  this.getExport = function(export_function) {
    if (this.dos_header_ptr == 0n || this.opt_header_ptr == 0n) {
      return 0n;
    }

    let data_directory_ptr = this.opt_header_ptr + 112n;
    let export_dir_ptr = data_directory_ptr;
    let export_rva = this.oob.getUint32(export_dir_ptr);
    let export_size = this.oob.getUint32(export_dir_ptr + 4n);
    if (export_size == 0) {
      return 0n;
    }

    var export_name_count = this.getUint32(export_rva + 0x18);
    var export_function_rva = this.getUint32(export_rva + 0x1c);
    var export_name_rva = this.getUint32(export_rva + 0x20);
    var export_ordinal_rva = this.getUint32(export_rva + 0x24);
    for (var i = 0; i < export_name_count; ++i) {
      let name_rva = this.getUint32(export_name_rva + (i * 4));
      let name = this.getString(name_rva)
      if (name == export_function) {
        let ordinal = this.getUint16(export_ordinal_rva + (i * 2));
        let function_rva = this.getUint32(export_function_rva + (ordinal * 4));
        return this.base + BigInt(function_rva);
      }
    }

    return 0n;
  }

  this.getGadget = function(gadget_bytes) {
    let opt_header_size = this.oob.getUint16(this.file_header_ptr + 16n);
    let section_count = this.oob.getUint16(this.file_header_ptr + 2n);
    let section_header_ptr = this.opt_header_ptr + BigInt(opt_header_size);
    
    for (var i = 0; i < section_count; ++i) {
      let characteristics = this.oob.getUint32(section_header_ptr + 36n);
      if ((characteristics & 0xe0000000) == 0x60000000) {
        // this section is read/execute, so scan for gadget

        let section_rva = this.oob.getUint32(section_header_ptr + 12n);
        let section_size = this.oob.getUint32(section_header_ptr + 16n);
        let section_base = this.base + BigInt(section_rva);
        if (!this.section_bytes.has(i)) {
          this.section_bytes[i] = new DataView(new ArrayBuffer(section_size));

          for (var j = 0; j < section_size; j += 8) {
            this.section_bytes[i].setBigUint64(j, this.getUint64(section_rva + j), true);
          }
        }

        for (var j = 0; j < section_size; ++j) {
          for (var k = 0; k < gadget_bytes.length; ++k) {
            if (this.section_bytes[i].getUint8(j + k) != gadget_bytes[k]) {
              break;
            }
          }
          if (k == gadget_bytes.length) {
            return section_base + BigInt(j);
          }
        }
      }
    }

    return 0n;
  }

  if (this.parse_headers() == true) {
    return this;
  } else {
    return null;
  }
}