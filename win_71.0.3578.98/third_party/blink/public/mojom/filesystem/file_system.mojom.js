// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/filesystem/file_system.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var types$ =
      mojo.internal.exposeNamespace('filesystem.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/services/filesystem/public/interfaces/types.mojom', '../../../../../components/services/filesystem/public/interfaces/types.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }
  var file_error$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_error.mojom', '../../../../../mojo/public/mojom/base/file_error.mojom.js');
  }
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var file_info$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_info.mojom', '../../../../../mojo/public/mojom/base/file_info.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var file_writer$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/filesystem/file_writer.mojom', 'file_writer.mojom.js');
  }


  var FileSystemType = {};
  FileSystemType.kTemporary = 0;
  FileSystemType.kPersistent = FileSystemType.kTemporary + 1;
  FileSystemType.kIsolated = FileSystemType.kPersistent + 1;
  FileSystemType.kExternal = FileSystemType.kIsolated + 1;

  FileSystemType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  FileSystemType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ChooseFileSystemEntryType = {};
  ChooseFileSystemEntryType.kOpenFile = 0;
  ChooseFileSystemEntryType.kOpenMultipleFiles = ChooseFileSystemEntryType.kOpenFile + 1;
  ChooseFileSystemEntryType.kSaveFile = ChooseFileSystemEntryType.kOpenMultipleFiles + 1;
  ChooseFileSystemEntryType.kOpenDirectory = ChooseFileSystemEntryType.kSaveFile + 1;

  ChooseFileSystemEntryType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ChooseFileSystemEntryType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FileSystemInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemInfo.prototype.initDefaults_ = function() {
    this.name = null;
    this.rootUrl = null;
    this.mountType = FileSystemType.kTemporary;
  };
  FileSystemInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemInfo.generate = function(generator_) {
    var generated = new FileSystemInfo;
    generated.name = generator_.generateString(false);
    generated.rootUrl = generator_.generateStruct(url.mojom.Url, false);
    generated.mountType = generator_.generateEnum(0, 3);
    return generated;
  };

  FileSystemInfo.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.name = mutator_.mutateString(this.name, false);
    }
    if (mutator_.chooseMutateField()) {
      this.rootUrl = mutator_.mutateStruct(this.rootUrl, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.mountType = mutator_.mutateEnum(this.mountType, 0, 3);
    }
    return this;
  };
  FileSystemInfo.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemInfo.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemInfo.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemInfo.rootUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemInfo.mountType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, FileSystemType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemInfo.encodedSize = codec.kStructHeaderSize + 24;

  FileSystemInfo.decode = function(decoder) {
    var packed;
    var val = new FileSystemInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.rootUrl = decoder.decodeStructPointer(url$.Url);
    val.mountType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStructPointer(url$.Url, val.rootUrl);
    encoder.encodeStruct(codec.Int32, val.mountType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemEntry.prototype.initDefaults_ = function() {
    this.fileSystemId = null;
    this.baseName = null;
  };
  FileSystemEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemEntry.generate = function(generator_) {
    var generated = new FileSystemEntry;
    generated.fileSystemId = generator_.generateString(false);
    generated.baseName = generator_.generateString(false);
    return generated;
  };

  FileSystemEntry.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.fileSystemId = mutator_.mutateString(this.fileSystemId, false);
    }
    if (mutator_.chooseMutateField()) {
      this.baseName = mutator_.mutateString(this.baseName, false);
    }
    return this;
  };
  FileSystemEntry.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemEntry.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemEntry.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemEntry.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemEntry.fileSystemId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemEntry.baseName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemEntry.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemEntry.decode = function(decoder) {
    var packed;
    var val = new FileSystemEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fileSystemId = decoder.decodeStruct(codec.String);
    val.baseName = decoder.decodeStruct(codec.String);
    return val;
  };

  FileSystemEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.fileSystemId);
    encoder.encodeStruct(codec.String, val.baseName);
  };
  function ChooseFileSystemEntryAcceptsOption(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ChooseFileSystemEntryAcceptsOption.prototype.initDefaults_ = function() {
    this.description = null;
    this.mimeTypes = null;
    this.extensions = null;
  };
  ChooseFileSystemEntryAcceptsOption.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  ChooseFileSystemEntryAcceptsOption.generate = function(generator_) {
    var generated = new ChooseFileSystemEntryAcceptsOption;
    generated.description = generator_.generateStruct(mojoBase.mojom.String16, false);
    generated.mimeTypes = generator_.generateArray(function() {
      return generator_.generateString(false);
    });
    generated.extensions = generator_.generateArray(function() {
      return generator_.generateString(false);
    });
    return generated;
  };

  ChooseFileSystemEntryAcceptsOption.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.description = mutator_.mutateStruct(this.description, mojoBase.mojom.String16, false);
    }
    if (mutator_.chooseMutateField()) {
      this.mimeTypes = mutator_.mutateArray(this.mimeTypes, function(val) {
        return mutator_.mutateString(val, false);
      });
    }
    if (mutator_.chooseMutateField()) {
      this.extensions = mutator_.mutateArray(this.extensions, function(val) {
        return mutator_.mutateString(val, false);
      });
    }
    return this;
  };
  ChooseFileSystemEntryAcceptsOption.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  ChooseFileSystemEntryAcceptsOption.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  ChooseFileSystemEntryAcceptsOption.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  ChooseFileSystemEntryAcceptsOption.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ChooseFileSystemEntryAcceptsOption.description
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ChooseFileSystemEntryAcceptsOption.mimeTypes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ChooseFileSystemEntryAcceptsOption.extensions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ChooseFileSystemEntryAcceptsOption.encodedSize = codec.kStructHeaderSize + 24;

  ChooseFileSystemEntryAcceptsOption.decode = function(decoder) {
    var packed;
    var val = new ChooseFileSystemEntryAcceptsOption();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.description = decoder.decodeStructPointer(string16$.String16);
    val.mimeTypes = decoder.decodeArrayPointer(codec.String);
    val.extensions = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  ChooseFileSystemEntryAcceptsOption.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ChooseFileSystemEntryAcceptsOption.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.String16, val.description);
    encoder.encodeArrayPointer(codec.String, val.mimeTypes);
    encoder.encodeArrayPointer(codec.String, val.extensions);
  };
  function FileSystemCancellableOperation_Cancel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemCancellableOperation_Cancel_Params.prototype.initDefaults_ = function() {
  };
  FileSystemCancellableOperation_Cancel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemCancellableOperation_Cancel_Params.generate = function(generator_) {
    var generated = new FileSystemCancellableOperation_Cancel_Params;
    return generated;
  };

  FileSystemCancellableOperation_Cancel_Params.prototype.mutate = function(mutator_) {
    return this;
  };
  FileSystemCancellableOperation_Cancel_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemCancellableOperation_Cancel_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemCancellableOperation_Cancel_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemCancellableOperation_Cancel_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemCancellableOperation_Cancel_Params.encodedSize = codec.kStructHeaderSize + 0;

  FileSystemCancellableOperation_Cancel_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemCancellableOperation_Cancel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FileSystemCancellableOperation_Cancel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemCancellableOperation_Cancel_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FileSystemCancellableOperation_Cancel_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemCancellableOperation_Cancel_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemCancellableOperation_Cancel_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemCancellableOperation_Cancel_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemCancellableOperation_Cancel_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemCancellableOperation_Cancel_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemCancellableOperation_Cancel_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemCancellableOperation_Cancel_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemCancellableOperation_Cancel_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemCancellableOperation_Cancel_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemCancellableOperation_Cancel_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemCancellableOperation_Cancel_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemCancellableOperation_Cancel_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemCancellableOperation_Cancel_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemCancellableOperation_Cancel_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemCancellableOperation_Cancel_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemOperationListener_ResultsRetrieved_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemOperationListener_ResultsRetrieved_Params.prototype.initDefaults_ = function() {
    this.entries = null;
    this.hasMore = false;
  };
  FileSystemOperationListener_ResultsRetrieved_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemOperationListener_ResultsRetrieved_Params.generate = function(generator_) {
    var generated = new FileSystemOperationListener_ResultsRetrieved_Params;
    generated.entries = generator_.generateArray(function() {
      return generator_.generateStruct(filesystem.mojom.DirectoryEntry, false);
    });
    generated.hasMore = generator_.generateBool();
    return generated;
  };

  FileSystemOperationListener_ResultsRetrieved_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.entries = mutator_.mutateArray(this.entries, function(val) {
        return mutator_.mutateStruct(val, filesystem.mojom.DirectoryEntry, false);
      });
    }
    if (mutator_.chooseMutateField()) {
      this.hasMore = mutator_.mutateBool(this.hasMore);
    }
    return this;
  };
  FileSystemOperationListener_ResultsRetrieved_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemOperationListener_ResultsRetrieved_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemOperationListener_ResultsRetrieved_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemOperationListener_ResultsRetrieved_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemOperationListener_ResultsRetrieved_Params.entries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(types$.DirectoryEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileSystemOperationListener_ResultsRetrieved_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemOperationListener_ResultsRetrieved_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemOperationListener_ResultsRetrieved_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.entries = decoder.decodeArrayPointer(new codec.PointerTo(types$.DirectoryEntry));
    packed = decoder.readUint8();
    val.hasMore = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemOperationListener_ResultsRetrieved_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemOperationListener_ResultsRetrieved_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(types$.DirectoryEntry), val.entries);
    packed = 0;
    packed |= (val.hasMore & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemOperationListener_DidWrite_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemOperationListener_DidWrite_Params.prototype.initDefaults_ = function() {
    this.byteCount = 0;
    this.complete = false;
  };
  FileSystemOperationListener_DidWrite_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemOperationListener_DidWrite_Params.generate = function(generator_) {
    var generated = new FileSystemOperationListener_DidWrite_Params;
    generated.byteCount = generator_.generateInt64();
    generated.complete = generator_.generateBool();
    return generated;
  };

  FileSystemOperationListener_DidWrite_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.byteCount = mutator_.mutateInt64(this.byteCount);
    }
    if (mutator_.chooseMutateField()) {
      this.complete = mutator_.mutateBool(this.complete);
    }
    return this;
  };
  FileSystemOperationListener_DidWrite_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemOperationListener_DidWrite_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemOperationListener_DidWrite_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemOperationListener_DidWrite_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  FileSystemOperationListener_DidWrite_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemOperationListener_DidWrite_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemOperationListener_DidWrite_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.byteCount = decoder.decodeStruct(codec.Int64);
    packed = decoder.readUint8();
    val.complete = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemOperationListener_DidWrite_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemOperationListener_DidWrite_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.byteCount);
    packed = 0;
    packed |= (val.complete & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemOperationListener_ErrorOccurred_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemOperationListener_ErrorOccurred_Params.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemOperationListener_ErrorOccurred_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemOperationListener_ErrorOccurred_Params.generate = function(generator_) {
    var generated = new FileSystemOperationListener_ErrorOccurred_Params;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemOperationListener_ErrorOccurred_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemOperationListener_ErrorOccurred_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemOperationListener_ErrorOccurred_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemOperationListener_ErrorOccurred_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemOperationListener_ErrorOccurred_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemOperationListener_ErrorOccurred_Params.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemOperationListener_ErrorOccurred_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemOperationListener_ErrorOccurred_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemOperationListener_ErrorOccurred_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemOperationListener_ErrorOccurred_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemOperationListener_ErrorOccurred_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ReceivedSnapshotListener_DidReceiveSnapshotFile_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.prototype.initDefaults_ = function() {
  };
  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.generate = function(generator_) {
    var generated = new ReceivedSnapshotListener_DidReceiveSnapshotFile_Params;
    return generated;
  };

  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.prototype.mutate = function(mutator_) {
    return this;
  };
  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.encodedSize = codec.kStructHeaderSize + 0;

  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.decode = function(decoder) {
    var packed;
    var val = new ReceivedSnapshotListener_DidReceiveSnapshotFile_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FileSystemManager_Open_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Open_Params.prototype.initDefaults_ = function() {
    this.originUrl = null;
    this.fileSystemType = 0;
  };
  FileSystemManager_Open_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Open_Params.generate = function(generator_) {
    var generated = new FileSystemManager_Open_Params;
    generated.originUrl = generator_.generateStruct(url.mojom.Url, false);
    generated.fileSystemType = generator_.generateEnum(0, 3);
    return generated;
  };

  FileSystemManager_Open_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.originUrl = mutator_.mutateStruct(this.originUrl, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.fileSystemType = mutator_.mutateEnum(this.fileSystemType, 0, 3);
    }
    return this;
  };
  FileSystemManager_Open_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Open_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Open_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Open_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Open_Params.originUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Open_Params.fileSystemType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, FileSystemType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Open_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_Open_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Open_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.originUrl = decoder.decodeStructPointer(url$.Url);
    val.fileSystemType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Open_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Open_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.originUrl);
    encoder.encodeStruct(codec.Int32, val.fileSystemType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Open_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Open_ResponseParams.prototype.initDefaults_ = function() {
    this.name = null;
    this.rootUrl = null;
    this.errorCode = 0;
  };
  FileSystemManager_Open_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Open_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_Open_ResponseParams;
    generated.name = generator_.generateString(false);
    generated.rootUrl = generator_.generateStruct(url.mojom.Url, false);
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_Open_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.name = mutator_.mutateString(this.name, false);
    }
    if (mutator_.chooseMutateField()) {
      this.rootUrl = mutator_.mutateStruct(this.rootUrl, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_Open_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Open_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Open_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Open_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Open_ResponseParams.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Open_ResponseParams.rootUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Open_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Open_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  FileSystemManager_Open_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Open_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.rootUrl = decoder.decodeStructPointer(url$.Url);
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Open_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Open_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStructPointer(url$.Url, val.rootUrl);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_ResolveURL_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ResolveURL_Params.prototype.initDefaults_ = function() {
    this.filesystemUrl = null;
  };
  FileSystemManager_ResolveURL_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ResolveURL_Params.generate = function(generator_) {
    var generated = new FileSystemManager_ResolveURL_Params;
    generated.filesystemUrl = generator_.generateStruct(url.mojom.Url, false);
    return generated;
  };

  FileSystemManager_ResolveURL_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.filesystemUrl = mutator_.mutateStruct(this.filesystemUrl, url.mojom.Url, false);
    }
    return this;
  };
  FileSystemManager_ResolveURL_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_ResolveURL_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ResolveURL_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_ResolveURL_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ResolveURL_Params.filesystemUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_ResolveURL_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_ResolveURL_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ResolveURL_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filesystemUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileSystemManager_ResolveURL_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ResolveURL_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.filesystemUrl);
  };
  function FileSystemManager_ResolveURL_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ResolveURL_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
    this.filePath = null;
    this.isDirectory = false;
    this.errorCode = 0;
  };
  FileSystemManager_ResolveURL_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ResolveURL_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_ResolveURL_ResponseParams;
    generated.info = generator_.generateStruct(blink.mojom.FileSystemInfo, false);
    generated.filePath = generator_.generateStruct(mojoBase.mojom.FilePath, false);
    generated.isDirectory = generator_.generateBool();
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_ResolveURL_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.info = mutator_.mutateStruct(this.info, blink.mojom.FileSystemInfo, false);
    }
    if (mutator_.chooseMutateField()) {
      this.filePath = mutator_.mutateStruct(this.filePath, mojoBase.mojom.FilePath, false);
    }
    if (mutator_.chooseMutateField()) {
      this.isDirectory = mutator_.mutateBool(this.isDirectory);
    }
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_ResolveURL_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_ResolveURL_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ResolveURL_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_ResolveURL_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ResolveURL_ResponseParams.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, FileSystemInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ResolveURL_ResponseParams.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FileSystemManager_ResolveURL_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 20, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_ResolveURL_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  FileSystemManager_ResolveURL_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ResolveURL_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(FileSystemInfo);
    val.filePath = decoder.decodeStructPointer(file_path$.FilePath);
    packed = decoder.readUint8();
    val.isDirectory = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.errorCode = decoder.decodeStruct(codec.Int32);
    return val;
  };

  FileSystemManager_ResolveURL_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ResolveURL_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(FileSystemInfo, val.info);
    encoder.encodeStructPointer(file_path$.FilePath, val.filePath);
    packed = 0;
    packed |= (val.isDirectory & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.errorCode);
  };
  function FileSystemManager_Move_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Move_Params.prototype.initDefaults_ = function() {
    this.srcPath = null;
    this.destPath = null;
  };
  FileSystemManager_Move_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Move_Params.generate = function(generator_) {
    var generated = new FileSystemManager_Move_Params;
    generated.srcPath = generator_.generateStruct(url.mojom.Url, false);
    generated.destPath = generator_.generateStruct(url.mojom.Url, false);
    return generated;
  };

  FileSystemManager_Move_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.srcPath = mutator_.mutateStruct(this.srcPath, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.destPath = mutator_.mutateStruct(this.destPath, url.mojom.Url, false);
    }
    return this;
  };
  FileSystemManager_Move_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Move_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Move_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Move_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Move_Params.srcPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Move_Params.destPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Move_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_Move_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Move_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.srcPath = decoder.decodeStructPointer(url$.Url);
    val.destPath = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileSystemManager_Move_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Move_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.srcPath);
    encoder.encodeStructPointer(url$.Url, val.destPath);
  };
  function FileSystemManager_Move_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Move_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemManager_Move_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Move_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_Move_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_Move_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_Move_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Move_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Move_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Move_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Move_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Move_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_Move_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Move_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Move_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Move_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Copy_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Copy_Params.prototype.initDefaults_ = function() {
    this.srcPath = null;
    this.destPath = null;
  };
  FileSystemManager_Copy_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Copy_Params.generate = function(generator_) {
    var generated = new FileSystemManager_Copy_Params;
    generated.srcPath = generator_.generateStruct(url.mojom.Url, false);
    generated.destPath = generator_.generateStruct(url.mojom.Url, false);
    return generated;
  };

  FileSystemManager_Copy_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.srcPath = mutator_.mutateStruct(this.srcPath, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.destPath = mutator_.mutateStruct(this.destPath, url.mojom.Url, false);
    }
    return this;
  };
  FileSystemManager_Copy_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Copy_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Copy_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Copy_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Copy_Params.srcPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Copy_Params.destPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Copy_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_Copy_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Copy_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.srcPath = decoder.decodeStructPointer(url$.Url);
    val.destPath = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileSystemManager_Copy_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Copy_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.srcPath);
    encoder.encodeStructPointer(url$.Url, val.destPath);
  };
  function FileSystemManager_Copy_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Copy_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemManager_Copy_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Copy_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_Copy_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_Copy_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_Copy_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Copy_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Copy_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Copy_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Copy_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Copy_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_Copy_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Copy_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Copy_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Copy_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Remove_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Remove_Params.prototype.initDefaults_ = function() {
    this.path = null;
    this.recursive = false;
  };
  FileSystemManager_Remove_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Remove_Params.generate = function(generator_) {
    var generated = new FileSystemManager_Remove_Params;
    generated.path = generator_.generateStruct(url.mojom.Url, false);
    generated.recursive = generator_.generateBool();
    return generated;
  };

  FileSystemManager_Remove_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.path = mutator_.mutateStruct(this.path, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.recursive = mutator_.mutateBool(this.recursive);
    }
    return this;
  };
  FileSystemManager_Remove_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Remove_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Remove_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Remove_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Remove_Params.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileSystemManager_Remove_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_Remove_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Remove_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStructPointer(url$.Url);
    packed = decoder.readUint8();
    val.recursive = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Remove_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Remove_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.path);
    packed = 0;
    packed |= (val.recursive & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Remove_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Remove_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemManager_Remove_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Remove_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_Remove_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_Remove_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_Remove_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Remove_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Remove_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Remove_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Remove_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Remove_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_Remove_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Remove_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Remove_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Remove_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_ReadMetadata_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ReadMetadata_Params.prototype.initDefaults_ = function() {
    this.path = null;
  };
  FileSystemManager_ReadMetadata_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ReadMetadata_Params.generate = function(generator_) {
    var generated = new FileSystemManager_ReadMetadata_Params;
    generated.path = generator_.generateStruct(url.mojom.Url, false);
    return generated;
  };

  FileSystemManager_ReadMetadata_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.path = mutator_.mutateStruct(this.path, url.mojom.Url, false);
    }
    return this;
  };
  FileSystemManager_ReadMetadata_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_ReadMetadata_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ReadMetadata_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_ReadMetadata_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ReadMetadata_Params.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_ReadMetadata_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_ReadMetadata_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ReadMetadata_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileSystemManager_ReadMetadata_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ReadMetadata_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.path);
  };
  function FileSystemManager_ReadMetadata_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ReadMetadata_ResponseParams.prototype.initDefaults_ = function() {
    this.fileInfo = null;
    this.errorCode = 0;
  };
  FileSystemManager_ReadMetadata_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ReadMetadata_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_ReadMetadata_ResponseParams;
    generated.fileInfo = generator_.generateStruct(mojoBase.mojom.FileInfo, false);
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_ReadMetadata_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.fileInfo = mutator_.mutateStruct(this.fileInfo, mojoBase.mojom.FileInfo, false);
    }
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_ReadMetadata_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_ReadMetadata_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ReadMetadata_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_ReadMetadata_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ReadMetadata_ResponseParams.fileInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_info$.FileInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ReadMetadata_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_ReadMetadata_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_ReadMetadata_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ReadMetadata_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fileInfo = decoder.decodeStructPointer(file_info$.FileInfo);
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_ReadMetadata_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ReadMetadata_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_info$.FileInfo, val.fileInfo);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Create_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Create_Params.prototype.initDefaults_ = function() {
    this.path = null;
    this.exclusive = false;
    this.isDirectory = false;
    this.recursive = false;
  };
  FileSystemManager_Create_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Create_Params.generate = function(generator_) {
    var generated = new FileSystemManager_Create_Params;
    generated.path = generator_.generateStruct(url.mojom.Url, false);
    generated.exclusive = generator_.generateBool();
    generated.isDirectory = generator_.generateBool();
    generated.recursive = generator_.generateBool();
    return generated;
  };

  FileSystemManager_Create_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.path = mutator_.mutateStruct(this.path, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.exclusive = mutator_.mutateBool(this.exclusive);
    }
    if (mutator_.chooseMutateField()) {
      this.isDirectory = mutator_.mutateBool(this.isDirectory);
    }
    if (mutator_.chooseMutateField()) {
      this.recursive = mutator_.mutateBool(this.recursive);
    }
    return this;
  };
  FileSystemManager_Create_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Create_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Create_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Create_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Create_Params.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  FileSystemManager_Create_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_Create_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Create_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStructPointer(url$.Url);
    packed = decoder.readUint8();
    val.exclusive = (packed >> 0) & 1 ? true : false;
    val.isDirectory = (packed >> 1) & 1 ? true : false;
    val.recursive = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Create_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Create_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.path);
    packed = 0;
    packed |= (val.exclusive & 1) << 0
    packed |= (val.isDirectory & 1) << 1
    packed |= (val.recursive & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Create_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Create_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemManager_Create_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Create_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_Create_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_Create_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_Create_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Create_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Create_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Create_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Create_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Create_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_Create_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Create_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Create_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Create_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Exists_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Exists_Params.prototype.initDefaults_ = function() {
    this.path = null;
    this.isDirectory = false;
  };
  FileSystemManager_Exists_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Exists_Params.generate = function(generator_) {
    var generated = new FileSystemManager_Exists_Params;
    generated.path = generator_.generateStruct(url.mojom.Url, false);
    generated.isDirectory = generator_.generateBool();
    return generated;
  };

  FileSystemManager_Exists_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.path = mutator_.mutateStruct(this.path, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.isDirectory = mutator_.mutateBool(this.isDirectory);
    }
    return this;
  };
  FileSystemManager_Exists_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Exists_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Exists_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Exists_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Exists_Params.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileSystemManager_Exists_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_Exists_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Exists_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStructPointer(url$.Url);
    packed = decoder.readUint8();
    val.isDirectory = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Exists_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Exists_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.path);
    packed = 0;
    packed |= (val.isDirectory & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Exists_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Exists_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemManager_Exists_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Exists_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_Exists_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_Exists_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_Exists_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Exists_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Exists_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Exists_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Exists_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Exists_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_Exists_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Exists_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Exists_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Exists_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_ReadDirectory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ReadDirectory_Params.prototype.initDefaults_ = function() {
    this.path = null;
    this.listener = new FileSystemOperationListenerPtr();
  };
  FileSystemManager_ReadDirectory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ReadDirectory_Params.generate = function(generator_) {
    var generated = new FileSystemManager_ReadDirectory_Params;
    generated.path = generator_.generateStruct(url.mojom.Url, false);
    generated.listener = generator_.generateInterface("blink.mojom.FileSystemOperationListener", false);
    return generated;
  };

  FileSystemManager_ReadDirectory_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.path = mutator_.mutateStruct(this.path, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.listener = mutator_.mutateInterface(this.listener, "blink.mojom.FileSystemOperationListener", false);
    }
    return this;
  };
  FileSystemManager_ReadDirectory_Params.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.listener !== null) {
      Array.prototype.push.apply(handles, ["blink.mojom.FileSystemOperationListenerPtr"]);
    }
    return handles;
  };

  FileSystemManager_ReadDirectory_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ReadDirectory_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    this.listener = handles[idx++];;
    return idx;
  };

  FileSystemManager_ReadDirectory_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ReadDirectory_Params.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ReadDirectory_Params.listener
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_ReadDirectory_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_ReadDirectory_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ReadDirectory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStructPointer(url$.Url);
    val.listener = decoder.decodeStruct(new codec.Interface(FileSystemOperationListenerPtr));
    return val;
  };

  FileSystemManager_ReadDirectory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ReadDirectory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.path);
    encoder.encodeStruct(new codec.Interface(FileSystemOperationListenerPtr), val.listener);
  };
  function FileSystemManager_ReadDirectorySync_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ReadDirectorySync_Params.prototype.initDefaults_ = function() {
    this.path = null;
  };
  FileSystemManager_ReadDirectorySync_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ReadDirectorySync_Params.generate = function(generator_) {
    var generated = new FileSystemManager_ReadDirectorySync_Params;
    generated.path = generator_.generateStruct(url.mojom.Url, false);
    return generated;
  };

  FileSystemManager_ReadDirectorySync_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.path = mutator_.mutateStruct(this.path, url.mojom.Url, false);
    }
    return this;
  };
  FileSystemManager_ReadDirectorySync_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_ReadDirectorySync_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ReadDirectorySync_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_ReadDirectorySync_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ReadDirectorySync_Params.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_ReadDirectorySync_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_ReadDirectorySync_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ReadDirectorySync_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileSystemManager_ReadDirectorySync_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ReadDirectorySync_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.path);
  };
  function FileSystemManager_ReadDirectorySync_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ReadDirectorySync_ResponseParams.prototype.initDefaults_ = function() {
    this.entries = null;
    this.errorCode = 0;
  };
  FileSystemManager_ReadDirectorySync_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ReadDirectorySync_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_ReadDirectorySync_ResponseParams;
    generated.entries = generator_.generateArray(function() {
      return generator_.generateStruct(filesystem.mojom.DirectoryEntry, false);
    });
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_ReadDirectorySync_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.entries = mutator_.mutateArray(this.entries, function(val) {
        return mutator_.mutateStruct(val, filesystem.mojom.DirectoryEntry, false);
      });
    }
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_ReadDirectorySync_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_ReadDirectorySync_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ReadDirectorySync_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_ReadDirectorySync_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ReadDirectorySync_ResponseParams.entries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(types$.DirectoryEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ReadDirectorySync_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_ReadDirectorySync_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_ReadDirectorySync_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ReadDirectorySync_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.entries = decoder.decodeArrayPointer(new codec.PointerTo(types$.DirectoryEntry));
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_ReadDirectorySync_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ReadDirectorySync_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(types$.DirectoryEntry), val.entries);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Write_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Write_Params.prototype.initDefaults_ = function() {
    this.filePath = null;
    this.blobUuid = null;
    this.position = 0;
    this.opRequest = new bindings.InterfaceRequest();
    this.listener = new FileSystemOperationListenerPtr();
  };
  FileSystemManager_Write_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Write_Params.generate = function(generator_) {
    var generated = new FileSystemManager_Write_Params;
    generated.filePath = generator_.generateStruct(url.mojom.Url, false);
    generated.blobUuid = generator_.generateString(false);
    generated.position = generator_.generateInt64();
    generated.opRequest = generator_.generateInterfaceRequest("blink.mojom.FileSystemCancellableOperation", false);
    generated.listener = generator_.generateInterface("blink.mojom.FileSystemOperationListener", false);
    return generated;
  };

  FileSystemManager_Write_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.filePath = mutator_.mutateStruct(this.filePath, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.blobUuid = mutator_.mutateString(this.blobUuid, false);
    }
    if (mutator_.chooseMutateField()) {
      this.position = mutator_.mutateInt64(this.position);
    }
    if (mutator_.chooseMutateField()) {
      this.opRequest = mutator_.mutateInterfaceRequest(this.opRequest, "blink.mojom.FileSystemCancellableOperation", false);
    }
    if (mutator_.chooseMutateField()) {
      this.listener = mutator_.mutateInterface(this.listener, "blink.mojom.FileSystemOperationListener", false);
    }
    return this;
  };
  FileSystemManager_Write_Params.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.opRequest !== null) {
      Array.prototype.push.apply(handles, ["blink.mojom.FileSystemCancellableOperationRequest"]);
    }
    if (this.listener !== null) {
      Array.prototype.push.apply(handles, ["blink.mojom.FileSystemOperationListenerPtr"]);
    }
    return handles;
  };

  FileSystemManager_Write_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Write_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    this.opRequest = handles[idx++];;
    this.listener = handles[idx++];;
    return idx;
  };

  FileSystemManager_Write_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Write_Params.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Write_Params.blobUuid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate FileSystemManager_Write_Params.opRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Write_Params.listener
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 28, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Write_Params.encodedSize = codec.kStructHeaderSize + 40;

  FileSystemManager_Write_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Write_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath = decoder.decodeStructPointer(url$.Url);
    val.blobUuid = decoder.decodeStruct(codec.String);
    val.position = decoder.decodeStruct(codec.Int64);
    val.opRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.listener = decoder.decodeStruct(new codec.Interface(FileSystemOperationListenerPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Write_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Write_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.filePath);
    encoder.encodeStruct(codec.String, val.blobUuid);
    encoder.encodeStruct(codec.Int64, val.position);
    encoder.encodeStruct(codec.InterfaceRequest, val.opRequest);
    encoder.encodeStruct(new codec.Interface(FileSystemOperationListenerPtr), val.listener);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_WriteSync_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_WriteSync_Params.prototype.initDefaults_ = function() {
    this.filePath = null;
    this.blobUuid = null;
    this.position = 0;
  };
  FileSystemManager_WriteSync_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_WriteSync_Params.generate = function(generator_) {
    var generated = new FileSystemManager_WriteSync_Params;
    generated.filePath = generator_.generateStruct(url.mojom.Url, false);
    generated.blobUuid = generator_.generateString(false);
    generated.position = generator_.generateInt64();
    return generated;
  };

  FileSystemManager_WriteSync_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.filePath = mutator_.mutateStruct(this.filePath, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.blobUuid = mutator_.mutateString(this.blobUuid, false);
    }
    if (mutator_.chooseMutateField()) {
      this.position = mutator_.mutateInt64(this.position);
    }
    return this;
  };
  FileSystemManager_WriteSync_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_WriteSync_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_WriteSync_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_WriteSync_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_WriteSync_Params.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_WriteSync_Params.blobUuid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileSystemManager_WriteSync_Params.encodedSize = codec.kStructHeaderSize + 24;

  FileSystemManager_WriteSync_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_WriteSync_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath = decoder.decodeStructPointer(url$.Url);
    val.blobUuid = decoder.decodeStruct(codec.String);
    val.position = decoder.decodeStruct(codec.Int64);
    return val;
  };

  FileSystemManager_WriteSync_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_WriteSync_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.filePath);
    encoder.encodeStruct(codec.String, val.blobUuid);
    encoder.encodeStruct(codec.Int64, val.position);
  };
  function FileSystemManager_WriteSync_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_WriteSync_ResponseParams.prototype.initDefaults_ = function() {
    this.byteCount = 0;
    this.errorCode = 0;
  };
  FileSystemManager_WriteSync_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_WriteSync_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_WriteSync_ResponseParams;
    generated.byteCount = generator_.generateInt64();
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_WriteSync_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.byteCount = mutator_.mutateInt64(this.byteCount);
    }
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_WriteSync_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_WriteSync_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_WriteSync_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_WriteSync_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FileSystemManager_WriteSync_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_WriteSync_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_WriteSync_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_WriteSync_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.byteCount = decoder.decodeStruct(codec.Int64);
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_WriteSync_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_WriteSync_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.byteCount);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Truncate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Truncate_Params.prototype.initDefaults_ = function() {
    this.filePath = null;
    this.length = 0;
    this.opRequest = new bindings.InterfaceRequest();
  };
  FileSystemManager_Truncate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Truncate_Params.generate = function(generator_) {
    var generated = new FileSystemManager_Truncate_Params;
    generated.filePath = generator_.generateStruct(url.mojom.Url, false);
    generated.length = generator_.generateInt64();
    generated.opRequest = generator_.generateInterfaceRequest("blink.mojom.FileSystemCancellableOperation", false);
    return generated;
  };

  FileSystemManager_Truncate_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.filePath = mutator_.mutateStruct(this.filePath, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.length = mutator_.mutateInt64(this.length);
    }
    if (mutator_.chooseMutateField()) {
      this.opRequest = mutator_.mutateInterfaceRequest(this.opRequest, "blink.mojom.FileSystemCancellableOperation", false);
    }
    return this;
  };
  FileSystemManager_Truncate_Params.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.opRequest !== null) {
      Array.prototype.push.apply(handles, ["blink.mojom.FileSystemCancellableOperationRequest"]);
    }
    return handles;
  };

  FileSystemManager_Truncate_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Truncate_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    this.opRequest = handles[idx++];;
    return idx;
  };

  FileSystemManager_Truncate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Truncate_Params.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FileSystemManager_Truncate_Params.opRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Truncate_Params.encodedSize = codec.kStructHeaderSize + 24;

  FileSystemManager_Truncate_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Truncate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath = decoder.decodeStructPointer(url$.Url);
    val.length = decoder.decodeStruct(codec.Int64);
    val.opRequest = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Truncate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Truncate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.filePath);
    encoder.encodeStruct(codec.Int64, val.length);
    encoder.encodeStruct(codec.InterfaceRequest, val.opRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_Truncate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_Truncate_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemManager_Truncate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_Truncate_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_Truncate_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_Truncate_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_Truncate_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_Truncate_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_Truncate_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_Truncate_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_Truncate_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_Truncate_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_Truncate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_Truncate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_Truncate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_Truncate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_TruncateSync_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_TruncateSync_Params.prototype.initDefaults_ = function() {
    this.filePath = null;
    this.length = 0;
  };
  FileSystemManager_TruncateSync_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_TruncateSync_Params.generate = function(generator_) {
    var generated = new FileSystemManager_TruncateSync_Params;
    generated.filePath = generator_.generateStruct(url.mojom.Url, false);
    generated.length = generator_.generateInt64();
    return generated;
  };

  FileSystemManager_TruncateSync_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.filePath = mutator_.mutateStruct(this.filePath, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.length = mutator_.mutateInt64(this.length);
    }
    return this;
  };
  FileSystemManager_TruncateSync_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_TruncateSync_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_TruncateSync_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_TruncateSync_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_TruncateSync_Params.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileSystemManager_TruncateSync_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_TruncateSync_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_TruncateSync_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath = decoder.decodeStructPointer(url$.Url);
    val.length = decoder.decodeStruct(codec.Int64);
    return val;
  };

  FileSystemManager_TruncateSync_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_TruncateSync_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.filePath);
    encoder.encodeStruct(codec.Int64, val.length);
  };
  function FileSystemManager_TruncateSync_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_TruncateSync_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemManager_TruncateSync_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_TruncateSync_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_TruncateSync_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_TruncateSync_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_TruncateSync_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_TruncateSync_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_TruncateSync_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_TruncateSync_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_TruncateSync_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_TruncateSync_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_TruncateSync_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_TruncateSync_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_TruncateSync_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_TruncateSync_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_TouchFile_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_TouchFile_Params.prototype.initDefaults_ = function() {
    this.path = null;
    this.lastAccessTime = null;
    this.lastModifiedTime = null;
  };
  FileSystemManager_TouchFile_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_TouchFile_Params.generate = function(generator_) {
    var generated = new FileSystemManager_TouchFile_Params;
    generated.path = generator_.generateStruct(url.mojom.Url, false);
    generated.lastAccessTime = generator_.generateStruct(mojoBase.mojom.Time, false);
    generated.lastModifiedTime = generator_.generateStruct(mojoBase.mojom.Time, false);
    return generated;
  };

  FileSystemManager_TouchFile_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.path = mutator_.mutateStruct(this.path, url.mojom.Url, false);
    }
    if (mutator_.chooseMutateField()) {
      this.lastAccessTime = mutator_.mutateStruct(this.lastAccessTime, mojoBase.mojom.Time, false);
    }
    if (mutator_.chooseMutateField()) {
      this.lastModifiedTime = mutator_.mutateStruct(this.lastModifiedTime, mojoBase.mojom.Time, false);
    }
    return this;
  };
  FileSystemManager_TouchFile_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_TouchFile_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_TouchFile_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_TouchFile_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_TouchFile_Params.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_TouchFile_Params.lastAccessTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_TouchFile_Params.lastModifiedTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_TouchFile_Params.encodedSize = codec.kStructHeaderSize + 24;

  FileSystemManager_TouchFile_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_TouchFile_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStructPointer(url$.Url);
    val.lastAccessTime = decoder.decodeStructPointer(time$.Time);
    val.lastModifiedTime = decoder.decodeStructPointer(time$.Time);
    return val;
  };

  FileSystemManager_TouchFile_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_TouchFile_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.path);
    encoder.encodeStructPointer(time$.Time, val.lastAccessTime);
    encoder.encodeStructPointer(time$.Time, val.lastModifiedTime);
  };
  function FileSystemManager_TouchFile_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_TouchFile_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  FileSystemManager_TouchFile_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_TouchFile_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_TouchFile_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    return generated;
  };

  FileSystemManager_TouchFile_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    return this;
  };
  FileSystemManager_TouchFile_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_TouchFile_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_TouchFile_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_TouchFile_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_TouchFile_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_TouchFile_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_TouchFile_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_TouchFile_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_TouchFile_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_TouchFile_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_CreateSnapshotFile_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_CreateSnapshotFile_Params.prototype.initDefaults_ = function() {
    this.filePath = null;
  };
  FileSystemManager_CreateSnapshotFile_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_CreateSnapshotFile_Params.generate = function(generator_) {
    var generated = new FileSystemManager_CreateSnapshotFile_Params;
    generated.filePath = generator_.generateStruct(url.mojom.Url, false);
    return generated;
  };

  FileSystemManager_CreateSnapshotFile_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.filePath = mutator_.mutateStruct(this.filePath, url.mojom.Url, false);
    }
    return this;
  };
  FileSystemManager_CreateSnapshotFile_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_CreateSnapshotFile_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_CreateSnapshotFile_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_CreateSnapshotFile_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_CreateSnapshotFile_Params.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_CreateSnapshotFile_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_CreateSnapshotFile_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_CreateSnapshotFile_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileSystemManager_CreateSnapshotFile_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_CreateSnapshotFile_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.filePath);
  };
  function FileSystemManager_CreateSnapshotFile_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_CreateSnapshotFile_ResponseParams.prototype.initDefaults_ = function() {
    this.fileInfo = null;
    this.platformPath = null;
    this.errorCode = 0;
    this.snapshotListener = new ReceivedSnapshotListenerPtr();
  };
  FileSystemManager_CreateSnapshotFile_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_CreateSnapshotFile_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_CreateSnapshotFile_ResponseParams;
    generated.fileInfo = generator_.generateStruct(mojoBase.mojom.FileInfo, false);
    generated.platformPath = generator_.generateStruct(mojoBase.mojom.FilePath, false);
    generated.errorCode = generator_.generateEnum(0, 0);
    generated.snapshotListener = generator_.generateInterface("blink.mojom.ReceivedSnapshotListener", true);
    return generated;
  };

  FileSystemManager_CreateSnapshotFile_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.fileInfo = mutator_.mutateStruct(this.fileInfo, mojoBase.mojom.FileInfo, false);
    }
    if (mutator_.chooseMutateField()) {
      this.platformPath = mutator_.mutateStruct(this.platformPath, mojoBase.mojom.FilePath, false);
    }
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    if (mutator_.chooseMutateField()) {
      this.snapshotListener = mutator_.mutateInterface(this.snapshotListener, "blink.mojom.ReceivedSnapshotListener", true);
    }
    return this;
  };
  FileSystemManager_CreateSnapshotFile_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.snapshotListener !== null) {
      Array.prototype.push.apply(handles, ["blink.mojom.ReceivedSnapshotListenerPtr"]);
    }
    return handles;
  };

  FileSystemManager_CreateSnapshotFile_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_CreateSnapshotFile_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    this.snapshotListener = handles[idx++];;
    return idx;
  };

  FileSystemManager_CreateSnapshotFile_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_CreateSnapshotFile_ResponseParams.fileInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_info$.FileInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_CreateSnapshotFile_ResponseParams.platformPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_CreateSnapshotFile_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_CreateSnapshotFile_ResponseParams.snapshotListener
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 20, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_CreateSnapshotFile_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  FileSystemManager_CreateSnapshotFile_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_CreateSnapshotFile_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fileInfo = decoder.decodeStructPointer(file_info$.FileInfo);
    val.platformPath = decoder.decodeStructPointer(file_path$.FilePath);
    val.errorCode = decoder.decodeStruct(codec.Int32);
    val.snapshotListener = decoder.decodeStruct(new codec.NullableInterface(ReceivedSnapshotListenerPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_CreateSnapshotFile_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_CreateSnapshotFile_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_info$.FileInfo, val.fileInfo);
    encoder.encodeStructPointer(file_path$.FilePath, val.platformPath);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.encodeStruct(new codec.NullableInterface(ReceivedSnapshotListenerPtr), val.snapshotListener);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_GetPlatformPath_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_GetPlatformPath_Params.prototype.initDefaults_ = function() {
    this.filePath = null;
  };
  FileSystemManager_GetPlatformPath_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_GetPlatformPath_Params.generate = function(generator_) {
    var generated = new FileSystemManager_GetPlatformPath_Params;
    generated.filePath = generator_.generateStruct(url.mojom.Url, false);
    return generated;
  };

  FileSystemManager_GetPlatformPath_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.filePath = mutator_.mutateStruct(this.filePath, url.mojom.Url, false);
    }
    return this;
  };
  FileSystemManager_GetPlatformPath_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_GetPlatformPath_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_GetPlatformPath_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_GetPlatformPath_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_GetPlatformPath_Params.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_GetPlatformPath_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_GetPlatformPath_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_GetPlatformPath_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileSystemManager_GetPlatformPath_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_GetPlatformPath_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.filePath);
  };
  function FileSystemManager_GetPlatformPath_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_GetPlatformPath_ResponseParams.prototype.initDefaults_ = function() {
    this.platformPath = null;
  };
  FileSystemManager_GetPlatformPath_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_GetPlatformPath_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_GetPlatformPath_ResponseParams;
    generated.platformPath = generator_.generateStruct(mojoBase.mojom.FilePath, false);
    return generated;
  };

  FileSystemManager_GetPlatformPath_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.platformPath = mutator_.mutateStruct(this.platformPath, mojoBase.mojom.FilePath, false);
    }
    return this;
  };
  FileSystemManager_GetPlatformPath_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_GetPlatformPath_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_GetPlatformPath_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_GetPlatformPath_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_GetPlatformPath_ResponseParams.platformPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_GetPlatformPath_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_GetPlatformPath_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_GetPlatformPath_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.platformPath = decoder.decodeStructPointer(file_path$.FilePath);
    return val;
  };

  FileSystemManager_GetPlatformPath_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_GetPlatformPath_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.platformPath);
  };
  function FileSystemManager_CreateWriter_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_CreateWriter_Params.prototype.initDefaults_ = function() {
    this.filePath = null;
  };
  FileSystemManager_CreateWriter_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_CreateWriter_Params.generate = function(generator_) {
    var generated = new FileSystemManager_CreateWriter_Params;
    generated.filePath = generator_.generateStruct(url.mojom.Url, false);
    return generated;
  };

  FileSystemManager_CreateWriter_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.filePath = mutator_.mutateStruct(this.filePath, url.mojom.Url, false);
    }
    return this;
  };
  FileSystemManager_CreateWriter_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_CreateWriter_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_CreateWriter_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_CreateWriter_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_CreateWriter_Params.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_CreateWriter_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemManager_CreateWriter_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_CreateWriter_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileSystemManager_CreateWriter_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_CreateWriter_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.filePath);
  };
  function FileSystemManager_CreateWriter_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_CreateWriter_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.writer = new file_writer$.FileWriterPtr();
  };
  FileSystemManager_CreateWriter_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_CreateWriter_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_CreateWriter_ResponseParams;
    generated.result = generator_.generateEnum(0, 0);
    generated.writer = generator_.generateInterface("blink.mojom.FileWriter", true);
    return generated;
  };

  FileSystemManager_CreateWriter_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.result = mutator_.mutateEnum(this.result, 0, 0);
    }
    if (mutator_.chooseMutateField()) {
      this.writer = mutator_.mutateInterface(this.writer, "blink.mojom.FileWriter", true);
    }
    return this;
  };
  FileSystemManager_CreateWriter_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.writer !== null) {
      Array.prototype.push.apply(handles, ["blink.mojom.FileWriterPtr"]);
    }
    return handles;
  };

  FileSystemManager_CreateWriter_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_CreateWriter_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    this.writer = handles[idx++];;
    return idx;
  };

  FileSystemManager_CreateWriter_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_CreateWriter_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_CreateWriter_ResponseParams.writer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_CreateWriter_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_CreateWriter_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_CreateWriter_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    val.writer = decoder.decodeStruct(new codec.NullableInterface(file_writer$.FileWriterPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemManager_CreateWriter_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_CreateWriter_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.encodeStruct(new codec.NullableInterface(file_writer$.FileWriterPtr), val.writer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemManager_ChooseEntry_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ChooseEntry_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.includeAcceptsAll = false;
    this.accepts = null;
  };
  FileSystemManager_ChooseEntry_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ChooseEntry_Params.generate = function(generator_) {
    var generated = new FileSystemManager_ChooseEntry_Params;
    generated.type = generator_.generateEnum(0, 3);
    generated.accepts = generator_.generateArray(function() {
      return generator_.generateStruct(blink.mojom.ChooseFileSystemEntryAcceptsOption, false);
    });
    generated.includeAcceptsAll = generator_.generateBool();
    return generated;
  };

  FileSystemManager_ChooseEntry_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.type = mutator_.mutateEnum(this.type, 0, 3);
    }
    if (mutator_.chooseMutateField()) {
      this.accepts = mutator_.mutateArray(this.accepts, function(val) {
        return mutator_.mutateStruct(val, blink.mojom.ChooseFileSystemEntryAcceptsOption, false);
      });
    }
    if (mutator_.chooseMutateField()) {
      this.includeAcceptsAll = mutator_.mutateBool(this.includeAcceptsAll);
    }
    return this;
  };
  FileSystemManager_ChooseEntry_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_ChooseEntry_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ChooseEntry_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_ChooseEntry_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ChooseEntry_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ChooseFileSystemEntryType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ChooseEntry_Params.accepts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(ChooseFileSystemEntryAcceptsOption), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileSystemManager_ChooseEntry_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_ChooseEntry_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ChooseEntry_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.includeAcceptsAll = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.accepts = decoder.decodeArrayPointer(new codec.PointerTo(ChooseFileSystemEntryAcceptsOption));
    return val;
  };

  FileSystemManager_ChooseEntry_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ChooseEntry_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    packed = 0;
    packed |= (val.includeAcceptsAll & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(ChooseFileSystemEntryAcceptsOption), val.accepts);
  };
  function FileSystemManager_ChooseEntry_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemManager_ChooseEntry_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
    this.entries = null;
  };
  FileSystemManager_ChooseEntry_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileSystemManager_ChooseEntry_ResponseParams.generate = function(generator_) {
    var generated = new FileSystemManager_ChooseEntry_ResponseParams;
    generated.errorCode = generator_.generateEnum(0, 0);
    generated.entries = generator_.generateArray(function() {
      return generator_.generateStruct(blink.mojom.FileSystemEntry, false);
    });
    return generated;
  };

  FileSystemManager_ChooseEntry_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.errorCode = mutator_.mutateEnum(this.errorCode, 0, 0);
    }
    if (mutator_.chooseMutateField()) {
      this.entries = mutator_.mutateArray(this.entries, function(val) {
        return mutator_.mutateStruct(val, blink.mojom.FileSystemEntry, false);
      });
    }
    return this;
  };
  FileSystemManager_ChooseEntry_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileSystemManager_ChooseEntry_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileSystemManager_ChooseEntry_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileSystemManager_ChooseEntry_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ChooseEntry_ResponseParams.errorCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemManager_ChooseEntry_ResponseParams.entries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(FileSystemEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemManager_ChooseEntry_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemManager_ChooseEntry_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemManager_ChooseEntry_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.entries = decoder.decodeArrayPointer(new codec.PointerTo(FileSystemEntry));
    return val;
  };

  FileSystemManager_ChooseEntry_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemManager_ChooseEntry_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(FileSystemEntry), val.entries);
  };
  var kFileSystemCancellableOperation_Cancel_Name = 596545041;

  function FileSystemCancellableOperationPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FileSystemCancellableOperation,
                                                   handleOrPtrInfo);
  }

  function FileSystemCancellableOperationAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FileSystemCancellableOperation, associatedInterfacePtrInfo);
  }

  FileSystemCancellableOperationAssociatedPtr.prototype =
      Object.create(FileSystemCancellableOperationPtr.prototype);
  FileSystemCancellableOperationAssociatedPtr.prototype.constructor =
      FileSystemCancellableOperationAssociatedPtr;

  function FileSystemCancellableOperationProxy(receiver) {
    this.receiver_ = receiver;
  }
  FileSystemCancellableOperationPtr.prototype.cancel = function() {
    return FileSystemCancellableOperationProxy.prototype.cancel
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemCancellableOperationProxy.prototype.cancel = function() {
    var params_ = new FileSystemCancellableOperation_Cancel_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemCancellableOperation_Cancel_Name,
          codec.align(FileSystemCancellableOperation_Cancel_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemCancellableOperation_Cancel_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemCancellableOperation_Cancel_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FileSystemCancellableOperationStub(delegate) {
    this.delegate_ = delegate;
  }
  FileSystemCancellableOperationStub.prototype.cancel = function() {
    return this.delegate_ && this.delegate_.cancel && this.delegate_.cancel();
  }

  FileSystemCancellableOperationStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FileSystemCancellableOperationStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileSystemCancellableOperation_Cancel_Name:
      var params = reader.decodeStruct(FileSystemCancellableOperation_Cancel_Params);
      this.cancel().then(function(response) {
        var responseParams =
            new FileSystemCancellableOperation_Cancel_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemCancellableOperation_Cancel_Name,
            codec.align(FileSystemCancellableOperation_Cancel_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemCancellableOperation_Cancel_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFileSystemCancellableOperationRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFileSystemCancellableOperation_Cancel_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemCancellableOperation_Cancel_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFileSystemCancellableOperationResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFileSystemCancellableOperation_Cancel_Name:
        if (message.isResponse())
          paramsClass = FileSystemCancellableOperation_Cancel_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FileSystemCancellableOperation = {
    name: 'blink.mojom.FileSystemCancellableOperation',
    kVersion: 0,
    ptrClass: FileSystemCancellableOperationPtr,
    proxyClass: FileSystemCancellableOperationProxy,
    stubClass: FileSystemCancellableOperationStub,
    validateRequest: validateFileSystemCancellableOperationRequest,
    validateResponse: validateFileSystemCancellableOperationResponse,
    mojomId: 'third_party/blink/public/mojom/filesystem/file_system.mojom',
    fuzzMethods: {
      cancel: {
        params: FileSystemCancellableOperation_Cancel_Params,
      },
    },
  };
  FileSystemCancellableOperationStub.prototype.validator = validateFileSystemCancellableOperationRequest;
  FileSystemCancellableOperationProxy.prototype.validator = validateFileSystemCancellableOperationResponse;
  var kFileSystemOperationListener_ResultsRetrieved_Name = 904834064;
  var kFileSystemOperationListener_DidWrite_Name = 691399964;
  var kFileSystemOperationListener_ErrorOccurred_Name = 1388694331;

  function FileSystemOperationListenerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FileSystemOperationListener,
                                                   handleOrPtrInfo);
  }

  function FileSystemOperationListenerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FileSystemOperationListener, associatedInterfacePtrInfo);
  }

  FileSystemOperationListenerAssociatedPtr.prototype =
      Object.create(FileSystemOperationListenerPtr.prototype);
  FileSystemOperationListenerAssociatedPtr.prototype.constructor =
      FileSystemOperationListenerAssociatedPtr;

  function FileSystemOperationListenerProxy(receiver) {
    this.receiver_ = receiver;
  }
  FileSystemOperationListenerPtr.prototype.resultsRetrieved = function() {
    return FileSystemOperationListenerProxy.prototype.resultsRetrieved
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemOperationListenerProxy.prototype.resultsRetrieved = function(entries, hasMore) {
    var params_ = new FileSystemOperationListener_ResultsRetrieved_Params();
    params_.entries = entries;
    params_.hasMore = hasMore;
    var builder = new codec.MessageV0Builder(
        kFileSystemOperationListener_ResultsRetrieved_Name,
        codec.align(FileSystemOperationListener_ResultsRetrieved_Params.encodedSize));
    builder.encodeStruct(FileSystemOperationListener_ResultsRetrieved_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FileSystemOperationListenerPtr.prototype.didWrite = function() {
    return FileSystemOperationListenerProxy.prototype.didWrite
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemOperationListenerProxy.prototype.didWrite = function(byteCount, complete) {
    var params_ = new FileSystemOperationListener_DidWrite_Params();
    params_.byteCount = byteCount;
    params_.complete = complete;
    var builder = new codec.MessageV0Builder(
        kFileSystemOperationListener_DidWrite_Name,
        codec.align(FileSystemOperationListener_DidWrite_Params.encodedSize));
    builder.encodeStruct(FileSystemOperationListener_DidWrite_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FileSystemOperationListenerPtr.prototype.errorOccurred = function() {
    return FileSystemOperationListenerProxy.prototype.errorOccurred
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemOperationListenerProxy.prototype.errorOccurred = function(errorCode) {
    var params_ = new FileSystemOperationListener_ErrorOccurred_Params();
    params_.errorCode = errorCode;
    var builder = new codec.MessageV0Builder(
        kFileSystemOperationListener_ErrorOccurred_Name,
        codec.align(FileSystemOperationListener_ErrorOccurred_Params.encodedSize));
    builder.encodeStruct(FileSystemOperationListener_ErrorOccurred_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function FileSystemOperationListenerStub(delegate) {
    this.delegate_ = delegate;
  }
  FileSystemOperationListenerStub.prototype.resultsRetrieved = function(entries, hasMore) {
    return this.delegate_ && this.delegate_.resultsRetrieved && this.delegate_.resultsRetrieved(entries, hasMore);
  }
  FileSystemOperationListenerStub.prototype.didWrite = function(byteCount, complete) {
    return this.delegate_ && this.delegate_.didWrite && this.delegate_.didWrite(byteCount, complete);
  }
  FileSystemOperationListenerStub.prototype.errorOccurred = function(errorCode) {
    return this.delegate_ && this.delegate_.errorOccurred && this.delegate_.errorOccurred(errorCode);
  }

  FileSystemOperationListenerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileSystemOperationListener_ResultsRetrieved_Name:
      var params = reader.decodeStruct(FileSystemOperationListener_ResultsRetrieved_Params);
      this.resultsRetrieved(params.entries, params.hasMore);
      return true;
    case kFileSystemOperationListener_DidWrite_Name:
      var params = reader.decodeStruct(FileSystemOperationListener_DidWrite_Params);
      this.didWrite(params.byteCount, params.complete);
      return true;
    case kFileSystemOperationListener_ErrorOccurred_Name:
      var params = reader.decodeStruct(FileSystemOperationListener_ErrorOccurred_Params);
      this.errorOccurred(params.errorCode);
      return true;
    default:
      return false;
    }
  };

  FileSystemOperationListenerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateFileSystemOperationListenerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFileSystemOperationListener_ResultsRetrieved_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileSystemOperationListener_ResultsRetrieved_Params;
      break;
      case kFileSystemOperationListener_DidWrite_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileSystemOperationListener_DidWrite_Params;
      break;
      case kFileSystemOperationListener_ErrorOccurred_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileSystemOperationListener_ErrorOccurred_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFileSystemOperationListenerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var FileSystemOperationListener = {
    name: 'blink.mojom.FileSystemOperationListener',
    kVersion: 0,
    ptrClass: FileSystemOperationListenerPtr,
    proxyClass: FileSystemOperationListenerProxy,
    stubClass: FileSystemOperationListenerStub,
    validateRequest: validateFileSystemOperationListenerRequest,
    validateResponse: null,
    mojomId: 'third_party/blink/public/mojom/filesystem/file_system.mojom',
    fuzzMethods: {
      resultsRetrieved: {
        params: FileSystemOperationListener_ResultsRetrieved_Params,
      },
      didWrite: {
        params: FileSystemOperationListener_DidWrite_Params,
      },
      errorOccurred: {
        params: FileSystemOperationListener_ErrorOccurred_Params,
      },
    },
  };
  FileSystemOperationListenerStub.prototype.validator = validateFileSystemOperationListenerRequest;
  FileSystemOperationListenerProxy.prototype.validator = null;
  var kReceivedSnapshotListener_DidReceiveSnapshotFile_Name = 978236215;

  function ReceivedSnapshotListenerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ReceivedSnapshotListener,
                                                   handleOrPtrInfo);
  }

  function ReceivedSnapshotListenerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ReceivedSnapshotListener, associatedInterfacePtrInfo);
  }

  ReceivedSnapshotListenerAssociatedPtr.prototype =
      Object.create(ReceivedSnapshotListenerPtr.prototype);
  ReceivedSnapshotListenerAssociatedPtr.prototype.constructor =
      ReceivedSnapshotListenerAssociatedPtr;

  function ReceivedSnapshotListenerProxy(receiver) {
    this.receiver_ = receiver;
  }
  ReceivedSnapshotListenerPtr.prototype.didReceiveSnapshotFile = function() {
    return ReceivedSnapshotListenerProxy.prototype.didReceiveSnapshotFile
        .apply(this.ptr.getProxy(), arguments);
  };

  ReceivedSnapshotListenerProxy.prototype.didReceiveSnapshotFile = function() {
    var params_ = new ReceivedSnapshotListener_DidReceiveSnapshotFile_Params();
    var builder = new codec.MessageV0Builder(
        kReceivedSnapshotListener_DidReceiveSnapshotFile_Name,
        codec.align(ReceivedSnapshotListener_DidReceiveSnapshotFile_Params.encodedSize));
    builder.encodeStruct(ReceivedSnapshotListener_DidReceiveSnapshotFile_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ReceivedSnapshotListenerStub(delegate) {
    this.delegate_ = delegate;
  }
  ReceivedSnapshotListenerStub.prototype.didReceiveSnapshotFile = function() {
    return this.delegate_ && this.delegate_.didReceiveSnapshotFile && this.delegate_.didReceiveSnapshotFile();
  }

  ReceivedSnapshotListenerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kReceivedSnapshotListener_DidReceiveSnapshotFile_Name:
      var params = reader.decodeStruct(ReceivedSnapshotListener_DidReceiveSnapshotFile_Params);
      this.didReceiveSnapshotFile();
      return true;
    default:
      return false;
    }
  };

  ReceivedSnapshotListenerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateReceivedSnapshotListenerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kReceivedSnapshotListener_DidReceiveSnapshotFile_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ReceivedSnapshotListener_DidReceiveSnapshotFile_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateReceivedSnapshotListenerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ReceivedSnapshotListener = {
    name: 'blink.mojom.ReceivedSnapshotListener',
    kVersion: 0,
    ptrClass: ReceivedSnapshotListenerPtr,
    proxyClass: ReceivedSnapshotListenerProxy,
    stubClass: ReceivedSnapshotListenerStub,
    validateRequest: validateReceivedSnapshotListenerRequest,
    validateResponse: null,
    mojomId: 'third_party/blink/public/mojom/filesystem/file_system.mojom',
    fuzzMethods: {
      didReceiveSnapshotFile: {
        params: ReceivedSnapshotListener_DidReceiveSnapshotFile_Params,
      },
    },
  };
  ReceivedSnapshotListenerStub.prototype.validator = validateReceivedSnapshotListenerRequest;
  ReceivedSnapshotListenerProxy.prototype.validator = null;
  var kFileSystemManager_Open_Name = 0x305E02BE/*843017063*/;
  var kFileSystemManager_ResolveURL_Name = 1715903949;
  var kFileSystemManager_Move_Name = 298732595;
  var kFileSystemManager_Copy_Name = 1979857049;
  var kFileSystemManager_Remove_Name = 212722906;
  var kFileSystemManager_ReadMetadata_Name = 612940749;
  var kFileSystemManager_Create_Name = 1842694723;
  var kFileSystemManager_Exists_Name = 1055330596;
  var kFileSystemManager_ReadDirectory_Name = 1769511045;
  var kFileSystemManager_ReadDirectorySync_Name = 767171495;
  var kFileSystemManager_Write_Name = 2059911059;
  var kFileSystemManager_WriteSync_Name = 1736157815;
  var kFileSystemManager_Truncate_Name = 348301191;
  var kFileSystemManager_TruncateSync_Name = 843157182;
  var kFileSystemManager_TouchFile_Name = 209740850;
  var kFileSystemManager_CreateSnapshotFile_Name = 843134;
  var kFileSystemManager_GetPlatformPath_Name = 2099104250;
  var kFileSystemManager_CreateWriter_Name = 0x63B8D2A6/*1074062040*/;
  var kFileSystemManager_ChooseEntry_Name = 1927498088;

  function FileSystemManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FileSystemManager,
                                                   handleOrPtrInfo);
  }

  function FileSystemManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FileSystemManager, associatedInterfacePtrInfo);
  }

  FileSystemManagerAssociatedPtr.prototype =
      Object.create(FileSystemManagerPtr.prototype);
  FileSystemManagerAssociatedPtr.prototype.constructor =
      FileSystemManagerAssociatedPtr;

  function FileSystemManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  FileSystemManagerPtr.prototype.open = function() {
    return FileSystemManagerProxy.prototype.open
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.open = function(originUrl, fileSystemType) {
    var params_ = new FileSystemManager_Open_Params();
    params_.originUrl = originUrl;
    params_.fileSystemType = fileSystemType;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_Open_Name,
          codec.align(FileSystemManager_Open_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_Open_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_Open_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.resolveURL = function() {
    return FileSystemManagerProxy.prototype.resolveURL
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.resolveURL = function(filesystemUrl) {
    var params_ = new FileSystemManager_ResolveURL_Params();
    params_.filesystemUrl = filesystemUrl;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_ResolveURL_Name,
          codec.align(FileSystemManager_ResolveURL_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_ResolveURL_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_ResolveURL_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.move = function() {
    return FileSystemManagerProxy.prototype.move
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.move = function(srcPath, destPath) {
    var params_ = new FileSystemManager_Move_Params();
    params_.srcPath = srcPath;
    params_.destPath = destPath;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_Move_Name,
          codec.align(FileSystemManager_Move_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_Move_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_Move_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.copy = function() {
    return FileSystemManagerProxy.prototype.copy
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.copy = function(srcPath, destPath) {
    var params_ = new FileSystemManager_Copy_Params();
    params_.srcPath = srcPath;
    params_.destPath = destPath;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_Copy_Name,
          codec.align(FileSystemManager_Copy_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_Copy_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_Copy_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.remove = function() {
    return FileSystemManagerProxy.prototype.remove
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.remove = function(path, recursive) {
    var params_ = new FileSystemManager_Remove_Params();
    params_.path = path;
    params_.recursive = recursive;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_Remove_Name,
          codec.align(FileSystemManager_Remove_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_Remove_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_Remove_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.readMetadata = function() {
    return FileSystemManagerProxy.prototype.readMetadata
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.readMetadata = function(path) {
    var params_ = new FileSystemManager_ReadMetadata_Params();
    params_.path = path;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_ReadMetadata_Name,
          codec.align(FileSystemManager_ReadMetadata_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_ReadMetadata_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_ReadMetadata_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.create = function() {
    return FileSystemManagerProxy.prototype.create
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.create = function(path, exclusive, isDirectory, recursive) {
    var params_ = new FileSystemManager_Create_Params();
    params_.path = path;
    params_.exclusive = exclusive;
    params_.isDirectory = isDirectory;
    params_.recursive = recursive;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_Create_Name,
          codec.align(FileSystemManager_Create_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_Create_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_Create_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.exists = function() {
    return FileSystemManagerProxy.prototype.exists
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.exists = function(path, isDirectory) {
    var params_ = new FileSystemManager_Exists_Params();
    params_.path = path;
    params_.isDirectory = isDirectory;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_Exists_Name,
          codec.align(FileSystemManager_Exists_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_Exists_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_Exists_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.readDirectory = function() {
    return FileSystemManagerProxy.prototype.readDirectory
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.readDirectory = function(path, listener) {
    var params_ = new FileSystemManager_ReadDirectory_Params();
    params_.path = path;
    params_.listener = listener;
    var builder = new codec.MessageV0Builder(
        kFileSystemManager_ReadDirectory_Name,
        codec.align(FileSystemManager_ReadDirectory_Params.encodedSize));
    builder.encodeStruct(FileSystemManager_ReadDirectory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FileSystemManagerPtr.prototype.readDirectorySync = function() {
    return FileSystemManagerProxy.prototype.readDirectorySync
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.readDirectorySync = function(path) {
    var params_ = new FileSystemManager_ReadDirectorySync_Params();
    params_.path = path;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_ReadDirectorySync_Name,
          codec.align(FileSystemManager_ReadDirectorySync_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_ReadDirectorySync_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_ReadDirectorySync_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.write = function() {
    return FileSystemManagerProxy.prototype.write
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.write = function(filePath, blobUuid, position, opRequest, listener) {
    var params_ = new FileSystemManager_Write_Params();
    params_.filePath = filePath;
    params_.blobUuid = blobUuid;
    params_.position = position;
    params_.opRequest = opRequest;
    params_.listener = listener;
    var builder = new codec.MessageV0Builder(
        kFileSystemManager_Write_Name,
        codec.align(FileSystemManager_Write_Params.encodedSize));
    builder.encodeStruct(FileSystemManager_Write_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FileSystemManagerPtr.prototype.writeSync = function() {
    return FileSystemManagerProxy.prototype.writeSync
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.writeSync = function(filePath, blobUuid, position) {
    var params_ = new FileSystemManager_WriteSync_Params();
    params_.filePath = filePath;
    params_.blobUuid = blobUuid;
    params_.position = position;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_WriteSync_Name,
          codec.align(FileSystemManager_WriteSync_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_WriteSync_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_WriteSync_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.truncate = function() {
    return FileSystemManagerProxy.prototype.truncate
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.truncate = function(filePath, length, opRequest) {
    var params_ = new FileSystemManager_Truncate_Params();
    params_.filePath = filePath;
    params_.length = length;
    params_.opRequest = opRequest;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_Truncate_Name,
          codec.align(FileSystemManager_Truncate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_Truncate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_Truncate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.truncateSync = function() {
    return FileSystemManagerProxy.prototype.truncateSync
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.truncateSync = function(filePath, length) {
    var params_ = new FileSystemManager_TruncateSync_Params();
    params_.filePath = filePath;
    params_.length = length;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_TruncateSync_Name,
          codec.align(FileSystemManager_TruncateSync_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_TruncateSync_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_TruncateSync_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.touchFile = function() {
    return FileSystemManagerProxy.prototype.touchFile
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.touchFile = function(path, lastAccessTime, lastModifiedTime) {
    var params_ = new FileSystemManager_TouchFile_Params();
    params_.path = path;
    params_.lastAccessTime = lastAccessTime;
    params_.lastModifiedTime = lastModifiedTime;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_TouchFile_Name,
          codec.align(FileSystemManager_TouchFile_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_TouchFile_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_TouchFile_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.createSnapshotFile = function() {
    return FileSystemManagerProxy.prototype.createSnapshotFile
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.createSnapshotFile = function(filePath) {
    var params_ = new FileSystemManager_CreateSnapshotFile_Params();
    params_.filePath = filePath;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_CreateSnapshotFile_Name,
          codec.align(FileSystemManager_CreateSnapshotFile_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_CreateSnapshotFile_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_CreateSnapshotFile_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.getPlatformPath = function() {
    return FileSystemManagerProxy.prototype.getPlatformPath
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.getPlatformPath = function(filePath) {
    var params_ = new FileSystemManager_GetPlatformPath_Params();
    params_.filePath = filePath;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_GetPlatformPath_Name,
          codec.align(FileSystemManager_GetPlatformPath_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_GetPlatformPath_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_GetPlatformPath_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.createWriter = function() {
    return FileSystemManagerProxy.prototype.createWriter
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.createWriter = function(filePath) {
    var params_ = new FileSystemManager_CreateWriter_Params();
    params_.filePath = filePath;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_CreateWriter_Name,
          codec.align(FileSystemManager_CreateWriter_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_CreateWriter_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_CreateWriter_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemManagerPtr.prototype.chooseEntry = function() {
    return FileSystemManagerProxy.prototype.chooseEntry
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemManagerProxy.prototype.chooseEntry = function(type, accepts, includeAcceptsAll) {
    var params_ = new FileSystemManager_ChooseEntry_Params();
    params_.type = type;
    params_.accepts = accepts;
    params_.includeAcceptsAll = includeAcceptsAll;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemManager_ChooseEntry_Name,
          codec.align(FileSystemManager_ChooseEntry_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemManager_ChooseEntry_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemManager_ChooseEntry_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FileSystemManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  FileSystemManagerStub.prototype.open = function(originUrl, fileSystemType) {
    return this.delegate_ && this.delegate_.open && this.delegate_.open(originUrl, fileSystemType);
  }
  FileSystemManagerStub.prototype.resolveURL = function(filesystemUrl) {
    return this.delegate_ && this.delegate_.resolveURL && this.delegate_.resolveURL(filesystemUrl);
  }
  FileSystemManagerStub.prototype.move = function(srcPath, destPath) {
    return this.delegate_ && this.delegate_.move && this.delegate_.move(srcPath, destPath);
  }
  FileSystemManagerStub.prototype.copy = function(srcPath, destPath) {
    return this.delegate_ && this.delegate_.copy && this.delegate_.copy(srcPath, destPath);
  }
  FileSystemManagerStub.prototype.remove = function(path, recursive) {
    return this.delegate_ && this.delegate_.remove && this.delegate_.remove(path, recursive);
  }
  FileSystemManagerStub.prototype.readMetadata = function(path) {
    return this.delegate_ && this.delegate_.readMetadata && this.delegate_.readMetadata(path);
  }
  FileSystemManagerStub.prototype.create = function(path, exclusive, isDirectory, recursive) {
    return this.delegate_ && this.delegate_.create && this.delegate_.create(path, exclusive, isDirectory, recursive);
  }
  FileSystemManagerStub.prototype.exists = function(path, isDirectory) {
    return this.delegate_ && this.delegate_.exists && this.delegate_.exists(path, isDirectory);
  }
  FileSystemManagerStub.prototype.readDirectory = function(path, listener) {
    return this.delegate_ && this.delegate_.readDirectory && this.delegate_.readDirectory(path, listener);
  }
  FileSystemManagerStub.prototype.readDirectorySync = function(path) {
    return this.delegate_ && this.delegate_.readDirectorySync && this.delegate_.readDirectorySync(path);
  }
  FileSystemManagerStub.prototype.write = function(filePath, blobUuid, position, opRequest, listener) {
    return this.delegate_ && this.delegate_.write && this.delegate_.write(filePath, blobUuid, position, opRequest, listener);
  }
  FileSystemManagerStub.prototype.writeSync = function(filePath, blobUuid, position) {
    return this.delegate_ && this.delegate_.writeSync && this.delegate_.writeSync(filePath, blobUuid, position);
  }
  FileSystemManagerStub.prototype.truncate = function(filePath, length, opRequest) {
    return this.delegate_ && this.delegate_.truncate && this.delegate_.truncate(filePath, length, opRequest);
  }
  FileSystemManagerStub.prototype.truncateSync = function(filePath, length) {
    return this.delegate_ && this.delegate_.truncateSync && this.delegate_.truncateSync(filePath, length);
  }
  FileSystemManagerStub.prototype.touchFile = function(path, lastAccessTime, lastModifiedTime) {
    return this.delegate_ && this.delegate_.touchFile && this.delegate_.touchFile(path, lastAccessTime, lastModifiedTime);
  }
  FileSystemManagerStub.prototype.createSnapshotFile = function(filePath) {
    return this.delegate_ && this.delegate_.createSnapshotFile && this.delegate_.createSnapshotFile(filePath);
  }
  FileSystemManagerStub.prototype.getPlatformPath = function(filePath) {
    return this.delegate_ && this.delegate_.getPlatformPath && this.delegate_.getPlatformPath(filePath);
  }
  FileSystemManagerStub.prototype.createWriter = function(filePath) {
    return this.delegate_ && this.delegate_.createWriter && this.delegate_.createWriter(filePath);
  }
  FileSystemManagerStub.prototype.chooseEntry = function(type, accepts, includeAcceptsAll) {
    return this.delegate_ && this.delegate_.chooseEntry && this.delegate_.chooseEntry(type, accepts, includeAcceptsAll);
  }

  FileSystemManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileSystemManager_ReadDirectory_Name:
      var params = reader.decodeStruct(FileSystemManager_ReadDirectory_Params);
      this.readDirectory(params.path, params.listener);
      return true;
    case kFileSystemManager_Write_Name:
      var params = reader.decodeStruct(FileSystemManager_Write_Params);
      this.write(params.filePath, params.blobUuid, params.position, params.opRequest, params.listener);
      return true;
    default:
      return false;
    }
  };

  FileSystemManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileSystemManager_Open_Name:
      var params = reader.decodeStruct(FileSystemManager_Open_Params);
      this.open(params.originUrl, params.fileSystemType).then(function(response) {
        var responseParams =
            new FileSystemManager_Open_ResponseParams();
        responseParams.name = response.name;
        responseParams.rootUrl = response.rootUrl;
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_Open_Name,
            codec.align(FileSystemManager_Open_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_Open_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_ResolveURL_Name:
      var params = reader.decodeStruct(FileSystemManager_ResolveURL_Params);
      this.resolveURL(params.filesystemUrl).then(function(response) {
        var responseParams =
            new FileSystemManager_ResolveURL_ResponseParams();
        responseParams.info = response.info;
        responseParams.filePath = response.filePath;
        responseParams.isDirectory = response.isDirectory;
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_ResolveURL_Name,
            codec.align(FileSystemManager_ResolveURL_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_ResolveURL_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_Move_Name:
      var params = reader.decodeStruct(FileSystemManager_Move_Params);
      this.move(params.srcPath, params.destPath).then(function(response) {
        var responseParams =
            new FileSystemManager_Move_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_Move_Name,
            codec.align(FileSystemManager_Move_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_Move_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_Copy_Name:
      var params = reader.decodeStruct(FileSystemManager_Copy_Params);
      this.copy(params.srcPath, params.destPath).then(function(response) {
        var responseParams =
            new FileSystemManager_Copy_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_Copy_Name,
            codec.align(FileSystemManager_Copy_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_Copy_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_Remove_Name:
      var params = reader.decodeStruct(FileSystemManager_Remove_Params);
      this.remove(params.path, params.recursive).then(function(response) {
        var responseParams =
            new FileSystemManager_Remove_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_Remove_Name,
            codec.align(FileSystemManager_Remove_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_Remove_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_ReadMetadata_Name:
      var params = reader.decodeStruct(FileSystemManager_ReadMetadata_Params);
      this.readMetadata(params.path).then(function(response) {
        var responseParams =
            new FileSystemManager_ReadMetadata_ResponseParams();
        responseParams.fileInfo = response.fileInfo;
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_ReadMetadata_Name,
            codec.align(FileSystemManager_ReadMetadata_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_ReadMetadata_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_Create_Name:
      var params = reader.decodeStruct(FileSystemManager_Create_Params);
      this.create(params.path, params.exclusive, params.isDirectory, params.recursive).then(function(response) {
        var responseParams =
            new FileSystemManager_Create_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_Create_Name,
            codec.align(FileSystemManager_Create_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_Create_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_Exists_Name:
      var params = reader.decodeStruct(FileSystemManager_Exists_Params);
      this.exists(params.path, params.isDirectory).then(function(response) {
        var responseParams =
            new FileSystemManager_Exists_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_Exists_Name,
            codec.align(FileSystemManager_Exists_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_Exists_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_ReadDirectorySync_Name:
      var params = reader.decodeStruct(FileSystemManager_ReadDirectorySync_Params);
      this.readDirectorySync(params.path).then(function(response) {
        var responseParams =
            new FileSystemManager_ReadDirectorySync_ResponseParams();
        responseParams.entries = response.entries;
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_ReadDirectorySync_Name,
            codec.align(FileSystemManager_ReadDirectorySync_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_ReadDirectorySync_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_WriteSync_Name:
      var params = reader.decodeStruct(FileSystemManager_WriteSync_Params);
      this.writeSync(params.filePath, params.blobUuid, params.position).then(function(response) {
        var responseParams =
            new FileSystemManager_WriteSync_ResponseParams();
        responseParams.byteCount = response.byteCount;
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_WriteSync_Name,
            codec.align(FileSystemManager_WriteSync_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_WriteSync_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_Truncate_Name:
      var params = reader.decodeStruct(FileSystemManager_Truncate_Params);
      this.truncate(params.filePath, params.length, params.opRequest).then(function(response) {
        var responseParams =
            new FileSystemManager_Truncate_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_Truncate_Name,
            codec.align(FileSystemManager_Truncate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_Truncate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_TruncateSync_Name:
      var params = reader.decodeStruct(FileSystemManager_TruncateSync_Params);
      this.truncateSync(params.filePath, params.length).then(function(response) {
        var responseParams =
            new FileSystemManager_TruncateSync_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_TruncateSync_Name,
            codec.align(FileSystemManager_TruncateSync_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_TruncateSync_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_TouchFile_Name:
      var params = reader.decodeStruct(FileSystemManager_TouchFile_Params);
      this.touchFile(params.path, params.lastAccessTime, params.lastModifiedTime).then(function(response) {
        var responseParams =
            new FileSystemManager_TouchFile_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_TouchFile_Name,
            codec.align(FileSystemManager_TouchFile_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_TouchFile_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_CreateSnapshotFile_Name:
      var params = reader.decodeStruct(FileSystemManager_CreateSnapshotFile_Params);
      this.createSnapshotFile(params.filePath).then(function(response) {
        var responseParams =
            new FileSystemManager_CreateSnapshotFile_ResponseParams();
        responseParams.fileInfo = response.fileInfo;
        responseParams.platformPath = response.platformPath;
        responseParams.errorCode = response.errorCode;
        responseParams.snapshotListener = response.snapshotListener;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_CreateSnapshotFile_Name,
            codec.align(FileSystemManager_CreateSnapshotFile_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_CreateSnapshotFile_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_GetPlatformPath_Name:
      var params = reader.decodeStruct(FileSystemManager_GetPlatformPath_Params);
      this.getPlatformPath(params.filePath).then(function(response) {
        var responseParams =
            new FileSystemManager_GetPlatformPath_ResponseParams();
        responseParams.platformPath = response.platformPath;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_GetPlatformPath_Name,
            codec.align(FileSystemManager_GetPlatformPath_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_GetPlatformPath_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_CreateWriter_Name:
      var params = reader.decodeStruct(FileSystemManager_CreateWriter_Params);
      this.createWriter(params.filePath).then(function(response) {
        var responseParams =
            new FileSystemManager_CreateWriter_ResponseParams();
        responseParams.result = response.result;
        responseParams.writer = response.writer;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_CreateWriter_Name,
            codec.align(FileSystemManager_CreateWriter_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_CreateWriter_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileSystemManager_ChooseEntry_Name:
      var params = reader.decodeStruct(FileSystemManager_ChooseEntry_Params);
      this.chooseEntry(params.type, params.accepts, params.includeAcceptsAll).then(function(response) {
        var responseParams =
            new FileSystemManager_ChooseEntry_ResponseParams();
        responseParams.errorCode = response.errorCode;
        responseParams.entries = response.entries;
        var builder = new codec.MessageV1Builder(
            kFileSystemManager_ChooseEntry_Name,
            codec.align(FileSystemManager_ChooseEntry_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemManager_ChooseEntry_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFileSystemManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFileSystemManager_Open_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_Open_Params;
      break;
      case kFileSystemManager_ResolveURL_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_ResolveURL_Params;
      break;
      case kFileSystemManager_Move_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_Move_Params;
      break;
      case kFileSystemManager_Copy_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_Copy_Params;
      break;
      case kFileSystemManager_Remove_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_Remove_Params;
      break;
      case kFileSystemManager_ReadMetadata_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_ReadMetadata_Params;
      break;
      case kFileSystemManager_Create_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_Create_Params;
      break;
      case kFileSystemManager_Exists_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_Exists_Params;
      break;
      case kFileSystemManager_ReadDirectory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileSystemManager_ReadDirectory_Params;
      break;
      case kFileSystemManager_ReadDirectorySync_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_ReadDirectorySync_Params;
      break;
      case kFileSystemManager_Write_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileSystemManager_Write_Params;
      break;
      case kFileSystemManager_WriteSync_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_WriteSync_Params;
      break;
      case kFileSystemManager_Truncate_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_Truncate_Params;
      break;
      case kFileSystemManager_TruncateSync_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_TruncateSync_Params;
      break;
      case kFileSystemManager_TouchFile_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_TouchFile_Params;
      break;
      case kFileSystemManager_CreateSnapshotFile_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_CreateSnapshotFile_Params;
      break;
      case kFileSystemManager_GetPlatformPath_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_GetPlatformPath_Params;
      break;
      case kFileSystemManager_CreateWriter_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_CreateWriter_Params;
      break;
      case kFileSystemManager_ChooseEntry_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemManager_ChooseEntry_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFileSystemManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFileSystemManager_Open_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_Open_ResponseParams;
        break;
      case kFileSystemManager_ResolveURL_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_ResolveURL_ResponseParams;
        break;
      case kFileSystemManager_Move_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_Move_ResponseParams;
        break;
      case kFileSystemManager_Copy_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_Copy_ResponseParams;
        break;
      case kFileSystemManager_Remove_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_Remove_ResponseParams;
        break;
      case kFileSystemManager_ReadMetadata_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_ReadMetadata_ResponseParams;
        break;
      case kFileSystemManager_Create_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_Create_ResponseParams;
        break;
      case kFileSystemManager_Exists_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_Exists_ResponseParams;
        break;
      case kFileSystemManager_ReadDirectorySync_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_ReadDirectorySync_ResponseParams;
        break;
      case kFileSystemManager_WriteSync_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_WriteSync_ResponseParams;
        break;
      case kFileSystemManager_Truncate_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_Truncate_ResponseParams;
        break;
      case kFileSystemManager_TruncateSync_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_TruncateSync_ResponseParams;
        break;
      case kFileSystemManager_TouchFile_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_TouchFile_ResponseParams;
        break;
      case kFileSystemManager_CreateSnapshotFile_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_CreateSnapshotFile_ResponseParams;
        break;
      case kFileSystemManager_GetPlatformPath_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_GetPlatformPath_ResponseParams;
        break;
      case kFileSystemManager_CreateWriter_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_CreateWriter_ResponseParams;
        break;
      case kFileSystemManager_ChooseEntry_Name:
        if (message.isResponse())
          paramsClass = FileSystemManager_ChooseEntry_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FileSystemManager = {
    name: 'blink.mojom.FileSystemManager',
    kVersion: 0,
    ptrClass: FileSystemManagerPtr,
    proxyClass: FileSystemManagerProxy,
    stubClass: FileSystemManagerStub,
    validateRequest: validateFileSystemManagerRequest,
    validateResponse: validateFileSystemManagerResponse,
    mojomId: 'third_party/blink/public/mojom/filesystem/file_system.mojom',
    fuzzMethods: {
      open: {
        params: FileSystemManager_Open_Params,
      },
      resolveURL: {
        params: FileSystemManager_ResolveURL_Params,
      },
      move: {
        params: FileSystemManager_Move_Params,
      },
      copy: {
        params: FileSystemManager_Copy_Params,
      },
      remove: {
        params: FileSystemManager_Remove_Params,
      },
      readMetadata: {
        params: FileSystemManager_ReadMetadata_Params,
      },
      create: {
        params: FileSystemManager_Create_Params,
      },
      exists: {
        params: FileSystemManager_Exists_Params,
      },
      readDirectory: {
        params: FileSystemManager_ReadDirectory_Params,
      },
      readDirectorySync: {
        params: FileSystemManager_ReadDirectorySync_Params,
      },
      write: {
        params: FileSystemManager_Write_Params,
      },
      writeSync: {
        params: FileSystemManager_WriteSync_Params,
      },
      truncate: {
        params: FileSystemManager_Truncate_Params,
      },
      truncateSync: {
        params: FileSystemManager_TruncateSync_Params,
      },
      touchFile: {
        params: FileSystemManager_TouchFile_Params,
      },
      createSnapshotFile: {
        params: FileSystemManager_CreateSnapshotFile_Params,
      },
      getPlatformPath: {
        params: FileSystemManager_GetPlatformPath_Params,
      },
      createWriter: {
        params: FileSystemManager_CreateWriter_Params,
      },
      chooseEntry: {
        params: FileSystemManager_ChooseEntry_Params,
      },
    },
  };
  FileSystemManagerStub.prototype.validator = validateFileSystemManagerRequest;
  FileSystemManagerProxy.prototype.validator = validateFileSystemManagerResponse;
  exports.FileSystemType = FileSystemType;
  exports.ChooseFileSystemEntryType = ChooseFileSystemEntryType;
  exports.FileSystemInfo = FileSystemInfo;
  exports.FileSystemEntry = FileSystemEntry;
  exports.ChooseFileSystemEntryAcceptsOption = ChooseFileSystemEntryAcceptsOption;
  exports.FileSystemCancellableOperation = FileSystemCancellableOperation;
  exports.FileSystemCancellableOperationPtr = FileSystemCancellableOperationPtr;
  exports.FileSystemCancellableOperationAssociatedPtr = FileSystemCancellableOperationAssociatedPtr;
  exports.FileSystemOperationListener = FileSystemOperationListener;
  exports.FileSystemOperationListenerPtr = FileSystemOperationListenerPtr;
  exports.FileSystemOperationListenerAssociatedPtr = FileSystemOperationListenerAssociatedPtr;
  exports.ReceivedSnapshotListener = ReceivedSnapshotListener;
  exports.ReceivedSnapshotListenerPtr = ReceivedSnapshotListenerPtr;
  exports.ReceivedSnapshotListenerAssociatedPtr = ReceivedSnapshotListenerAssociatedPtr;
  exports.FileSystemManager = FileSystemManager;
  exports.FileSystemManagerPtr = FileSystemManagerPtr;
  exports.FileSystemManagerAssociatedPtr = FileSystemManagerAssociatedPtr;
})();