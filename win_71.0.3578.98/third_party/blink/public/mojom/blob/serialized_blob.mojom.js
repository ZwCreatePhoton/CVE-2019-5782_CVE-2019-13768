// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/blob/serialized_blob.mojom';
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
  var blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/blob.mojom', 'blob.mojom.js');
  }



  function SerializedBlob(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerializedBlob.prototype.initDefaults_ = function() {
    this.uuid = null;
    this.contentType = null;
    this.size = 0;
    this.blob = new blob$.BlobPtr();
  };
  SerializedBlob.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  SerializedBlob.generate = function(generator_) {
    var generated = new SerializedBlob;
    generated.uuid = generator_.generateString(false);
    generated.contentType = generator_.generateString(false);
    generated.size = generator_.generateUint64();
    generated.blob = generator_.generateInterface("blink.mojom.Blob", false);
    return generated;
  };

  SerializedBlob.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.uuid = mutator_.mutateString(this.uuid, false);
    }
    if (mutator_.chooseMutateField()) {
      this.contentType = mutator_.mutateString(this.contentType, false);
    }
    if (mutator_.chooseMutateField()) {
      this.size = mutator_.mutateUint64(this.size);
    }
    if (mutator_.chooseMutateField()) {
      this.blob = mutator_.mutateInterface(this.blob, "blink.mojom.Blob", false);
    }
    return this;
  };
  SerializedBlob.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.blob !== null) {
      Array.prototype.push.apply(handles, ["blink.mojom.BlobPtr"]);
    }
    return handles;
  };

  SerializedBlob.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  SerializedBlob.prototype.setHandlesInternal_ = function(handles, idx) {
    this.blob = handles[idx++];;
    return idx;
  };

  SerializedBlob.validate = function(messageValidator, offset) {
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


    // validate SerializedBlob.uuid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerializedBlob.contentType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate SerializedBlob.blob
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerializedBlob.encodedSize = codec.kStructHeaderSize + 32;

  SerializedBlob.decode = function(decoder) {
    var packed;
    var val = new SerializedBlob();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.uuid = decoder.decodeStruct(codec.String);
    val.contentType = decoder.decodeStruct(codec.String);
    val.size = decoder.decodeStruct(codec.Uint64);
    val.blob = decoder.decodeStruct(new codec.Interface(blob$.BlobPtr));
    return val;
  };

  SerializedBlob.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerializedBlob.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.uuid);
    encoder.encodeStruct(codec.String, val.contentType);
    encoder.encodeStruct(codec.Uint64, val.size);
    encoder.encodeStruct(new codec.Interface(blob$.BlobPtr), val.blob);
  };
  exports.SerializedBlob = SerializedBlob;
})();