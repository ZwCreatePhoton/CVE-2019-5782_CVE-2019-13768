// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/filesystem/file_writer.mojom';
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
  var file_error$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_error.mojom', '../../../../../mojo/public/mojom/base/file_error.mojom.js');
  }
  var blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/blob.mojom', '../blob/blob.mojom.js');
  }



  function FileWriter_Write_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileWriter_Write_Params.prototype.initDefaults_ = function() {
    this.position = 0;
    this.blob = new blob$.BlobPtr();
  };
  FileWriter_Write_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileWriter_Write_Params.generate = function(generator_) {
    var generated = new FileWriter_Write_Params;
    generated.position = generator_.generateUint64();
    generated.blob = generator_.generateInterface("blink.mojom.Blob", false);
    return generated;
  };

  FileWriter_Write_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.position = mutator_.mutateUint64(this.position);
    }
    if (mutator_.chooseMutateField()) {
      this.blob = mutator_.mutateInterface(this.blob, "blink.mojom.Blob", false);
    }
    return this;
  };
  FileWriter_Write_Params.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.blob !== null) {
      Array.prototype.push.apply(handles, ["blink.mojom.BlobPtr"]);
    }
    return handles;
  };

  FileWriter_Write_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileWriter_Write_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    this.blob = handles[idx++];;
    return idx;
  };

  FileWriter_Write_Params.validate = function(messageValidator, offset) {
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



    // validate FileWriter_Write_Params.blob
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileWriter_Write_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileWriter_Write_Params.decode = function(decoder) {
    var packed;
    var val = new FileWriter_Write_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.position = decoder.decodeStruct(codec.Uint64);
    val.blob = decoder.decodeStruct(new codec.Interface(blob$.BlobPtr));
    return val;
  };

  FileWriter_Write_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileWriter_Write_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.position);
    encoder.encodeStruct(new codec.Interface(blob$.BlobPtr), val.blob);
  };
  function FileWriter_Write_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileWriter_Write_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.bytesWritten = 0;
  };
  FileWriter_Write_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileWriter_Write_ResponseParams.generate = function(generator_) {
    var generated = new FileWriter_Write_ResponseParams;
    generated.result = generator_.generateEnum(0, 0);
    generated.bytesWritten = generator_.generateUint64();
    return generated;
  };

  FileWriter_Write_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.result = mutator_.mutateEnum(this.result, 0, 0);
    }
    if (mutator_.chooseMutateField()) {
      this.bytesWritten = mutator_.mutateUint64(this.bytesWritten);
    }
    return this;
  };
  FileWriter_Write_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileWriter_Write_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileWriter_Write_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileWriter_Write_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FileWriter_Write_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileWriter_Write_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FileWriter_Write_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileWriter_Write_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.bytesWritten = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  FileWriter_Write_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileWriter_Write_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.bytesWritten);
  };
  function FileWriter_WriteStream_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileWriter_WriteStream_Params.prototype.initDefaults_ = function() {
    this.position = 0;
    this.stream = null;
  };
  FileWriter_WriteStream_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileWriter_WriteStream_Params.generate = function(generator_) {
    var generated = new FileWriter_WriteStream_Params;
    generated.position = generator_.generateUint64();
    generated.stream = generator_.generateDataPipeConsumer(false);
    return generated;
  };

  FileWriter_WriteStream_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.position = mutator_.mutateUint64(this.position);
    }
    if (mutator_.chooseMutateField()) {
      this.stream = mutator_.mutateDataPipeConsumer(this.stream, false);
    }
    return this;
  };
  FileWriter_WriteStream_Params.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.stream !== null) {
      Array.prototype.push.apply(handles, ["handle<data_pipe_consumer>"]);
    }
    return handles;
  };

  FileWriter_WriteStream_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileWriter_WriteStream_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    this.stream = handles[idx++];;
    return idx;
  };

  FileWriter_WriteStream_Params.validate = function(messageValidator, offset) {
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



    // validate FileWriter_WriteStream_Params.stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileWriter_WriteStream_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileWriter_WriteStream_Params.decode = function(decoder) {
    var packed;
    var val = new FileWriter_WriteStream_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.position = decoder.decodeStruct(codec.Uint64);
    val.stream = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileWriter_WriteStream_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileWriter_WriteStream_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.position);
    encoder.encodeStruct(codec.Handle, val.stream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileWriter_WriteStream_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileWriter_WriteStream_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.bytesWritten = 0;
  };
  FileWriter_WriteStream_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileWriter_WriteStream_ResponseParams.generate = function(generator_) {
    var generated = new FileWriter_WriteStream_ResponseParams;
    generated.result = generator_.generateEnum(0, 0);
    generated.bytesWritten = generator_.generateUint64();
    return generated;
  };

  FileWriter_WriteStream_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.result = mutator_.mutateEnum(this.result, 0, 0);
    }
    if (mutator_.chooseMutateField()) {
      this.bytesWritten = mutator_.mutateUint64(this.bytesWritten);
    }
    return this;
  };
  FileWriter_WriteStream_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileWriter_WriteStream_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileWriter_WriteStream_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileWriter_WriteStream_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FileWriter_WriteStream_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileWriter_WriteStream_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FileWriter_WriteStream_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileWriter_WriteStream_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.bytesWritten = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  FileWriter_WriteStream_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileWriter_WriteStream_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.bytesWritten);
  };
  function FileWriter_Truncate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileWriter_Truncate_Params.prototype.initDefaults_ = function() {
    this.length = 0;
  };
  FileWriter_Truncate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileWriter_Truncate_Params.generate = function(generator_) {
    var generated = new FileWriter_Truncate_Params;
    generated.length = generator_.generateUint64();
    return generated;
  };

  FileWriter_Truncate_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.length = mutator_.mutateUint64(this.length);
    }
    return this;
  };
  FileWriter_Truncate_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileWriter_Truncate_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileWriter_Truncate_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileWriter_Truncate_Params.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  FileWriter_Truncate_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileWriter_Truncate_Params.decode = function(decoder) {
    var packed;
    var val = new FileWriter_Truncate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.length = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  FileWriter_Truncate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileWriter_Truncate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.length);
  };
  function FileWriter_Truncate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileWriter_Truncate_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  FileWriter_Truncate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  FileWriter_Truncate_ResponseParams.generate = function(generator_) {
    var generated = new FileWriter_Truncate_ResponseParams;
    generated.result = generator_.generateEnum(0, 0);
    return generated;
  };

  FileWriter_Truncate_ResponseParams.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.result = mutator_.mutateEnum(this.result, 0, 0);
    }
    return this;
  };
  FileWriter_Truncate_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  FileWriter_Truncate_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  FileWriter_Truncate_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  FileWriter_Truncate_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FileWriter_Truncate_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileWriter_Truncate_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileWriter_Truncate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileWriter_Truncate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileWriter_Truncate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileWriter_Truncate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kFileWriter_Write_Name = 0x64D4FC1C/*921772464*/;
  var kFileWriter_WriteStream_Name = 1810200497;
  var kFileWriter_Truncate_Name = 1215273582;

  function FileWriterPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FileWriter,
                                                   handleOrPtrInfo);
  }

  function FileWriterAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FileWriter, associatedInterfacePtrInfo);
  }

  FileWriterAssociatedPtr.prototype =
      Object.create(FileWriterPtr.prototype);
  FileWriterAssociatedPtr.prototype.constructor =
      FileWriterAssociatedPtr;

  function FileWriterProxy(receiver) {
    this.receiver_ = receiver;
  }
  FileWriterPtr.prototype.write = function() {
    return FileWriterProxy.prototype.write
        .apply(this.ptr.getProxy(), arguments);
  };

  FileWriterProxy.prototype.write = function(position, blob) {
    var params_ = new FileWriter_Write_Params();
    params_.position = position;
    params_.blob = blob;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileWriter_Write_Name,
          codec.align(FileWriter_Write_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileWriter_Write_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileWriter_Write_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileWriterPtr.prototype.writeStream = function() {
    return FileWriterProxy.prototype.writeStream
        .apply(this.ptr.getProxy(), arguments);
  };

  FileWriterProxy.prototype.writeStream = function(position, stream) {
    var params_ = new FileWriter_WriteStream_Params();
    params_.position = position;
    params_.stream = stream;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileWriter_WriteStream_Name,
          codec.align(FileWriter_WriteStream_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileWriter_WriteStream_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileWriter_WriteStream_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileWriterPtr.prototype.truncate = function() {
    return FileWriterProxy.prototype.truncate
        .apply(this.ptr.getProxy(), arguments);
  };

  FileWriterProxy.prototype.truncate = function(length) {
    var params_ = new FileWriter_Truncate_Params();
    params_.length = length;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileWriter_Truncate_Name,
          codec.align(FileWriter_Truncate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileWriter_Truncate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileWriter_Truncate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FileWriterStub(delegate) {
    this.delegate_ = delegate;
  }
  FileWriterStub.prototype.write = function(position, blob) {
    return this.delegate_ && this.delegate_.write && this.delegate_.write(position, blob);
  }
  FileWriterStub.prototype.writeStream = function(position, stream) {
    return this.delegate_ && this.delegate_.writeStream && this.delegate_.writeStream(position, stream);
  }
  FileWriterStub.prototype.truncate = function(length) {
    return this.delegate_ && this.delegate_.truncate && this.delegate_.truncate(length);
  }

  FileWriterStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FileWriterStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileWriter_Write_Name:
      var params = reader.decodeStruct(FileWriter_Write_Params);
      this.write(params.position, params.blob).then(function(response) {
        var responseParams =
            new FileWriter_Write_ResponseParams();
        responseParams.result = response.result;
        responseParams.bytesWritten = response.bytesWritten;
        var builder = new codec.MessageV1Builder(
            kFileWriter_Write_Name,
            codec.align(FileWriter_Write_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileWriter_Write_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileWriter_WriteStream_Name:
      var params = reader.decodeStruct(FileWriter_WriteStream_Params);
      this.writeStream(params.position, params.stream).then(function(response) {
        var responseParams =
            new FileWriter_WriteStream_ResponseParams();
        responseParams.result = response.result;
        responseParams.bytesWritten = response.bytesWritten;
        var builder = new codec.MessageV1Builder(
            kFileWriter_WriteStream_Name,
            codec.align(FileWriter_WriteStream_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileWriter_WriteStream_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileWriter_Truncate_Name:
      var params = reader.decodeStruct(FileWriter_Truncate_Params);
      this.truncate(params.length).then(function(response) {
        var responseParams =
            new FileWriter_Truncate_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kFileWriter_Truncate_Name,
            codec.align(FileWriter_Truncate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileWriter_Truncate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFileWriterRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFileWriter_Write_Name:
        if (message.expectsResponse())
          paramsClass = FileWriter_Write_Params;
      break;
      case kFileWriter_WriteStream_Name:
        if (message.expectsResponse())
          paramsClass = FileWriter_WriteStream_Params;
      break;
      case kFileWriter_Truncate_Name:
        if (message.expectsResponse())
          paramsClass = FileWriter_Truncate_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFileWriterResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFileWriter_Write_Name:
        if (message.isResponse())
          paramsClass = FileWriter_Write_ResponseParams;
        break;
      case kFileWriter_WriteStream_Name:
        if (message.isResponse())
          paramsClass = FileWriter_WriteStream_ResponseParams;
        break;
      case kFileWriter_Truncate_Name:
        if (message.isResponse())
          paramsClass = FileWriter_Truncate_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FileWriter = {
    name: 'blink.mojom.FileWriter',
    kVersion: 0,
    ptrClass: FileWriterPtr,
    proxyClass: FileWriterProxy,
    stubClass: FileWriterStub,
    validateRequest: validateFileWriterRequest,
    validateResponse: validateFileWriterResponse,
    mojomId: 'third_party/blink/public/mojom/filesystem/file_writer.mojom',
    fuzzMethods: {
      write: {
        params: FileWriter_Write_Params,
      },
      writeStream: {
        params: FileWriter_WriteStream_Params,
      },
      truncate: {
        params: FileWriter_Truncate_Params,
      },
    },
  };
  FileWriterStub.prototype.validator = validateFileWriterRequest;
  FileWriterProxy.prototype.validator = validateFileWriterResponse;
  exports.FileWriter = FileWriter;
  exports.FileWriterPtr = FileWriterPtr;
  exports.FileWriterAssociatedPtr = FileWriterAssociatedPtr;
})();