// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/url_loader.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var http_request_headers$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/http_request_headers.mojom', 'http_request_headers.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }


  var RequestPriority = {};
  RequestPriority.kThrottled = 0;
  RequestPriority.kIdle = RequestPriority.kThrottled + 1;
  RequestPriority.kLowest = RequestPriority.kIdle + 1;
  RequestPriority.kLow = RequestPriority.kLowest + 1;
  RequestPriority.kMedium = RequestPriority.kLow + 1;
  RequestPriority.kHighest = RequestPriority.kMedium + 1;

  RequestPriority.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  RequestPriority.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function URLRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLRequest.prototype.initDefaults_ = function() {
  };
  URLRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLRequest.generate = function(generator_) {
    var generated = new URLRequest;
    return generated;
  };

  URLRequest.prototype.mutate = function(mutator_) {
    return this;
  };
  URLRequest.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLRequest.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLRequest.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLRequest.validate = function(messageValidator, offset) {
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

  URLRequest.encodedSize = codec.kStructHeaderSize + 0;

  URLRequest.decode = function(decoder) {
    var packed;
    var val = new URLRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLRequest.encodedSize);
    encoder.writeUint32(0);
  };
  function URLResponseHead(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseHead.prototype.initDefaults_ = function() {
  };
  URLResponseHead.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLResponseHead.generate = function(generator_) {
    var generated = new URLResponseHead;
    return generated;
  };

  URLResponseHead.prototype.mutate = function(mutator_) {
    return this;
  };
  URLResponseHead.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLResponseHead.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLResponseHead.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLResponseHead.validate = function(messageValidator, offset) {
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

  URLResponseHead.encodedSize = codec.kStructHeaderSize + 0;

  URLResponseHead.decode = function(decoder) {
    var packed;
    var val = new URLResponseHead();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLResponseHead.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseHead.encodedSize);
    encoder.writeUint32(0);
  };
  function URLRequestRedirectInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLRequestRedirectInfo.prototype.initDefaults_ = function() {
  };
  URLRequestRedirectInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLRequestRedirectInfo.generate = function(generator_) {
    var generated = new URLRequestRedirectInfo;
    return generated;
  };

  URLRequestRedirectInfo.prototype.mutate = function(mutator_) {
    return this;
  };
  URLRequestRedirectInfo.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLRequestRedirectInfo.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLRequestRedirectInfo.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLRequestRedirectInfo.validate = function(messageValidator, offset) {
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

  URLRequestRedirectInfo.encodedSize = codec.kStructHeaderSize + 0;

  URLRequestRedirectInfo.decode = function(decoder) {
    var packed;
    var val = new URLRequestRedirectInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLRequestRedirectInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLRequestRedirectInfo.encodedSize);
    encoder.writeUint32(0);
  };
  function CORSErrorStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CORSErrorStatus.prototype.initDefaults_ = function() {
  };
  CORSErrorStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  CORSErrorStatus.generate = function(generator_) {
    var generated = new CORSErrorStatus;
    return generated;
  };

  CORSErrorStatus.prototype.mutate = function(mutator_) {
    return this;
  };
  CORSErrorStatus.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  CORSErrorStatus.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  CORSErrorStatus.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  CORSErrorStatus.validate = function(messageValidator, offset) {
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

  CORSErrorStatus.encodedSize = codec.kStructHeaderSize + 0;

  CORSErrorStatus.decode = function(decoder) {
    var packed;
    var val = new CORSErrorStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CORSErrorStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CORSErrorStatus.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoaderCompletionStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderCompletionStatus.prototype.initDefaults_ = function() {
  };
  URLLoaderCompletionStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderCompletionStatus.generate = function(generator_) {
    var generated = new URLLoaderCompletionStatus;
    return generated;
  };

  URLLoaderCompletionStatus.prototype.mutate = function(mutator_) {
    return this;
  };
  URLLoaderCompletionStatus.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoaderCompletionStatus.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderCompletionStatus.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoaderCompletionStatus.validate = function(messageValidator, offset) {
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

  URLLoaderCompletionStatus.encodedSize = codec.kStructHeaderSize + 0;

  URLLoaderCompletionStatus.decode = function(decoder) {
    var packed;
    var val = new URLLoaderCompletionStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoaderCompletionStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderCompletionStatus.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoaderClientEndpoints(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClientEndpoints.prototype.initDefaults_ = function() {
    this.urlLoader = new URLLoaderPtr();
    this.urlLoaderClient = new bindings.InterfaceRequest();
  };
  URLLoaderClientEndpoints.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClientEndpoints.generate = function(generator_) {
    var generated = new URLLoaderClientEndpoints;
    generated.urlLoader = generator_.generateInterface("network.mojom.URLLoader", false);
    generated.urlLoaderClient = generator_.generateInterfaceRequest("network.mojom.URLLoaderClient", false);
    return generated;
  };

  URLLoaderClientEndpoints.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.urlLoader = mutator_.mutateInterface(this.urlLoader, "network.mojom.URLLoader", false);
    }
    if (mutator_.chooseMutateField()) {
      this.urlLoaderClient = mutator_.mutateInterfaceRequest(this.urlLoaderClient, "network.mojom.URLLoaderClient", false);
    }
    return this;
  };
  URLLoaderClientEndpoints.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.urlLoader !== null) {
      Array.prototype.push.apply(handles, ["network.mojom.URLLoaderPtr"]);
    }
    if (this.urlLoaderClient !== null) {
      Array.prototype.push.apply(handles, ["network.mojom.URLLoaderClientRequest"]);
    }
    return handles;
  };

  URLLoaderClientEndpoints.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClientEndpoints.prototype.setHandlesInternal_ = function(handles, idx) {
    this.urlLoader = handles[idx++];;
    this.urlLoaderClient = handles[idx++];;
    return idx;
  };

  URLLoaderClientEndpoints.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClientEndpoints.urlLoader
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoaderClientEndpoints.urlLoaderClient
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClientEndpoints.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderClientEndpoints.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClientEndpoints();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlLoader = decoder.decodeStruct(new codec.Interface(URLLoaderPtr));
    val.urlLoaderClient = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderClientEndpoints.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClientEndpoints.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(URLLoaderPtr), val.urlLoader);
    encoder.encodeStruct(codec.InterfaceRequest, val.urlLoaderClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function URLLoader_FollowRedirect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_FollowRedirect_Params.prototype.initDefaults_ = function() {
    this.toBeRemovedRequestHeaders = null;
    this.modifiedRequestHeaders = null;
  };
  URLLoader_FollowRedirect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoader_FollowRedirect_Params.generate = function(generator_) {
    var generated = new URLLoader_FollowRedirect_Params;
    generated.toBeRemovedRequestHeaders = generator_.generateArray(function() {
      return generator_.generateString(false);
    });
    generated.modifiedRequestHeaders = generator_.generateStruct(network.mojom.HttpRequestHeaders, true);
    return generated;
  };

  URLLoader_FollowRedirect_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.toBeRemovedRequestHeaders = mutator_.mutateArray(this.toBeRemovedRequestHeaders, function(val) {
        return mutator_.mutateString(val, false);
      });
    }
    if (mutator_.chooseMutateField()) {
      this.modifiedRequestHeaders = mutator_.mutateStruct(this.modifiedRequestHeaders, network.mojom.HttpRequestHeaders, true);
    }
    return this;
  };
  URLLoader_FollowRedirect_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoader_FollowRedirect_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoader_FollowRedirect_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoader_FollowRedirect_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoader_FollowRedirect_Params.toBeRemovedRequestHeaders
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoader_FollowRedirect_Params.modifiedRequestHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, http_request_headers$.HttpRequestHeaders, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoader_FollowRedirect_Params.encodedSize = codec.kStructHeaderSize + 16;

  URLLoader_FollowRedirect_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_FollowRedirect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.toBeRemovedRequestHeaders = decoder.decodeArrayPointer(codec.String);
    val.modifiedRequestHeaders = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    return val;
  };

  URLLoader_FollowRedirect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_FollowRedirect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.toBeRemovedRequestHeaders);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.modifiedRequestHeaders);
  };
  function URLLoader_ProceedWithResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_ProceedWithResponse_Params.prototype.initDefaults_ = function() {
  };
  URLLoader_ProceedWithResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoader_ProceedWithResponse_Params.generate = function(generator_) {
    var generated = new URLLoader_ProceedWithResponse_Params;
    return generated;
  };

  URLLoader_ProceedWithResponse_Params.prototype.mutate = function(mutator_) {
    return this;
  };
  URLLoader_ProceedWithResponse_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoader_ProceedWithResponse_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoader_ProceedWithResponse_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoader_ProceedWithResponse_Params.validate = function(messageValidator, offset) {
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

  URLLoader_ProceedWithResponse_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoader_ProceedWithResponse_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_ProceedWithResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoader_ProceedWithResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_ProceedWithResponse_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoader_SetPriority_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_SetPriority_Params.prototype.initDefaults_ = function() {
    this.priority = 0;
    this.intraPriorityValue = 0;
  };
  URLLoader_SetPriority_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoader_SetPriority_Params.generate = function(generator_) {
    var generated = new URLLoader_SetPriority_Params;
    generated.priority = generator_.generateEnum(0, 5);
    generated.intraPriorityValue = generator_.generateInt32();
    return generated;
  };

  URLLoader_SetPriority_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.priority = mutator_.mutateEnum(this.priority, 0, 5);
    }
    if (mutator_.chooseMutateField()) {
      this.intraPriorityValue = mutator_.mutateInt32(this.intraPriorityValue);
    }
    return this;
  };
  URLLoader_SetPriority_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoader_SetPriority_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoader_SetPriority_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoader_SetPriority_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoader_SetPriority_Params.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, RequestPriority);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  URLLoader_SetPriority_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoader_SetPriority_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_SetPriority_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.priority = decoder.decodeStruct(codec.Int32);
    val.intraPriorityValue = decoder.decodeStruct(codec.Int32);
    return val;
  };

  URLLoader_SetPriority_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_SetPriority_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.priority);
    encoder.encodeStruct(codec.Int32, val.intraPriorityValue);
  };
  function URLLoader_PauseReadingBodyFromNet_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_PauseReadingBodyFromNet_Params.prototype.initDefaults_ = function() {
  };
  URLLoader_PauseReadingBodyFromNet_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoader_PauseReadingBodyFromNet_Params.generate = function(generator_) {
    var generated = new URLLoader_PauseReadingBodyFromNet_Params;
    return generated;
  };

  URLLoader_PauseReadingBodyFromNet_Params.prototype.mutate = function(mutator_) {
    return this;
  };
  URLLoader_PauseReadingBodyFromNet_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoader_PauseReadingBodyFromNet_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoader_PauseReadingBodyFromNet_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoader_PauseReadingBodyFromNet_Params.validate = function(messageValidator, offset) {
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

  URLLoader_PauseReadingBodyFromNet_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoader_PauseReadingBodyFromNet_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_PauseReadingBodyFromNet_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoader_PauseReadingBodyFromNet_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_PauseReadingBodyFromNet_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoader_ResumeReadingBodyFromNet_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_ResumeReadingBodyFromNet_Params.prototype.initDefaults_ = function() {
  };
  URLLoader_ResumeReadingBodyFromNet_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoader_ResumeReadingBodyFromNet_Params.generate = function(generator_) {
    var generated = new URLLoader_ResumeReadingBodyFromNet_Params;
    return generated;
  };

  URLLoader_ResumeReadingBodyFromNet_Params.prototype.mutate = function(mutator_) {
    return this;
  };
  URLLoader_ResumeReadingBodyFromNet_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoader_ResumeReadingBodyFromNet_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoader_ResumeReadingBodyFromNet_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoader_ResumeReadingBodyFromNet_Params.validate = function(messageValidator, offset) {
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

  URLLoader_ResumeReadingBodyFromNet_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoader_ResumeReadingBodyFromNet_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_ResumeReadingBodyFromNet_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoader_ResumeReadingBodyFromNet_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_ResumeReadingBodyFromNet_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoaderClient_OnReceiveResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnReceiveResponse_Params.prototype.initDefaults_ = function() {
    this.head = null;
  };
  URLLoaderClient_OnReceiveResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClient_OnReceiveResponse_Params.generate = function(generator_) {
    var generated = new URLLoaderClient_OnReceiveResponse_Params;
    generated.head = generator_.generateStruct(network.mojom.URLResponseHead, false);
    return generated;
  };

  URLLoaderClient_OnReceiveResponse_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.head = mutator_.mutateStruct(this.head, network.mojom.URLResponseHead, false);
    }
    return this;
  };
  URLLoaderClient_OnReceiveResponse_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoaderClient_OnReceiveResponse_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClient_OnReceiveResponse_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoaderClient_OnReceiveResponse_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnReceiveResponse_Params.head
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLResponseHead, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnReceiveResponse_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnReceiveResponse_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnReceiveResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.head = decoder.decodeStructPointer(URLResponseHead);
    return val;
  };

  URLLoaderClient_OnReceiveResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnReceiveResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLResponseHead, val.head);
  };
  function URLLoaderClient_OnReceiveRedirect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnReceiveRedirect_Params.prototype.initDefaults_ = function() {
    this.redirectInfo = null;
    this.head = null;
  };
  URLLoaderClient_OnReceiveRedirect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClient_OnReceiveRedirect_Params.generate = function(generator_) {
    var generated = new URLLoaderClient_OnReceiveRedirect_Params;
    generated.redirectInfo = generator_.generateStruct(network.mojom.URLRequestRedirectInfo, false);
    generated.head = generator_.generateStruct(network.mojom.URLResponseHead, false);
    return generated;
  };

  URLLoaderClient_OnReceiveRedirect_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.redirectInfo = mutator_.mutateStruct(this.redirectInfo, network.mojom.URLRequestRedirectInfo, false);
    }
    if (mutator_.chooseMutateField()) {
      this.head = mutator_.mutateStruct(this.head, network.mojom.URLResponseHead, false);
    }
    return this;
  };
  URLLoaderClient_OnReceiveRedirect_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoaderClient_OnReceiveRedirect_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClient_OnReceiveRedirect_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoaderClient_OnReceiveRedirect_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnReceiveRedirect_Params.redirectInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLRequestRedirectInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoaderClient_OnReceiveRedirect_Params.head
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, URLResponseHead, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnReceiveRedirect_Params.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderClient_OnReceiveRedirect_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnReceiveRedirect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.redirectInfo = decoder.decodeStructPointer(URLRequestRedirectInfo);
    val.head = decoder.decodeStructPointer(URLResponseHead);
    return val;
  };

  URLLoaderClient_OnReceiveRedirect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnReceiveRedirect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLRequestRedirectInfo, val.redirectInfo);
    encoder.encodeStructPointer(URLResponseHead, val.head);
  };
  function URLLoaderClient_OnUploadProgress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnUploadProgress_Params.prototype.initDefaults_ = function() {
    this.currentPosition = 0;
    this.totalSize = 0;
  };
  URLLoaderClient_OnUploadProgress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClient_OnUploadProgress_Params.generate = function(generator_) {
    var generated = new URLLoaderClient_OnUploadProgress_Params;
    generated.currentPosition = generator_.generateInt64();
    generated.totalSize = generator_.generateInt64();
    return generated;
  };

  URLLoaderClient_OnUploadProgress_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.currentPosition = mutator_.mutateInt64(this.currentPosition);
    }
    if (mutator_.chooseMutateField()) {
      this.totalSize = mutator_.mutateInt64(this.totalSize);
    }
    return this;
  };
  URLLoaderClient_OnUploadProgress_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoaderClient_OnUploadProgress_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClient_OnUploadProgress_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoaderClient_OnUploadProgress_Params.validate = function(messageValidator, offset) {
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

  URLLoaderClient_OnUploadProgress_Params.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderClient_OnUploadProgress_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnUploadProgress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.currentPosition = decoder.decodeStruct(codec.Int64);
    val.totalSize = decoder.decodeStruct(codec.Int64);
    return val;
  };

  URLLoaderClient_OnUploadProgress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnUploadProgress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.currentPosition);
    encoder.encodeStruct(codec.Int64, val.totalSize);
  };
  function URLLoaderClient_OnUploadProgress_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnUploadProgress_ResponseParams.prototype.initDefaults_ = function() {
  };
  URLLoaderClient_OnUploadProgress_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClient_OnUploadProgress_ResponseParams.generate = function(generator_) {
    var generated = new URLLoaderClient_OnUploadProgress_ResponseParams;
    return generated;
  };

  URLLoaderClient_OnUploadProgress_ResponseParams.prototype.mutate = function(mutator_) {
    return this;
  };
  URLLoaderClient_OnUploadProgress_ResponseParams.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoaderClient_OnUploadProgress_ResponseParams.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClient_OnUploadProgress_ResponseParams.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoaderClient_OnUploadProgress_ResponseParams.validate = function(messageValidator, offset) {
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

  URLLoaderClient_OnUploadProgress_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  URLLoaderClient_OnUploadProgress_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnUploadProgress_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoaderClient_OnUploadProgress_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnUploadProgress_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function URLLoaderClient_OnReceiveCachedMetadata_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnReceiveCachedMetadata_Params.prototype.initDefaults_ = function() {
    this.data = null;
  };
  URLLoaderClient_OnReceiveCachedMetadata_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClient_OnReceiveCachedMetadata_Params.generate = function(generator_) {
    var generated = new URLLoaderClient_OnReceiveCachedMetadata_Params;
    generated.data = generator_.generateArray(function() {
      return generator_.generateUint8();
    });
    return generated;
  };

  URLLoaderClient_OnReceiveCachedMetadata_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.data = mutator_.mutateArray(this.data, function(val) {
        return mutator_.mutateUint8(val);
      });
    }
    return this;
  };
  URLLoaderClient_OnReceiveCachedMetadata_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoaderClient_OnReceiveCachedMetadata_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClient_OnReceiveCachedMetadata_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoaderClient_OnReceiveCachedMetadata_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnReceiveCachedMetadata_Params.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnReceiveCachedMetadata_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnReceiveCachedMetadata_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnReceiveCachedMetadata_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  URLLoaderClient_OnReceiveCachedMetadata_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnReceiveCachedMetadata_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };
  function URLLoaderClient_OnTransferSizeUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnTransferSizeUpdated_Params.prototype.initDefaults_ = function() {
    this.transferSizeDiff = 0;
  };
  URLLoaderClient_OnTransferSizeUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClient_OnTransferSizeUpdated_Params.generate = function(generator_) {
    var generated = new URLLoaderClient_OnTransferSizeUpdated_Params;
    generated.transferSizeDiff = generator_.generateInt32();
    return generated;
  };

  URLLoaderClient_OnTransferSizeUpdated_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.transferSizeDiff = mutator_.mutateInt32(this.transferSizeDiff);
    }
    return this;
  };
  URLLoaderClient_OnTransferSizeUpdated_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoaderClient_OnTransferSizeUpdated_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClient_OnTransferSizeUpdated_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoaderClient_OnTransferSizeUpdated_Params.validate = function(messageValidator, offset) {
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

  URLLoaderClient_OnTransferSizeUpdated_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnTransferSizeUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnTransferSizeUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.transferSizeDiff = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderClient_OnTransferSizeUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnTransferSizeUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.transferSizeDiff);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function URLLoaderClient_OnStartLoadingResponseBody_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnStartLoadingResponseBody_Params.prototype.initDefaults_ = function() {
    this.body = null;
  };
  URLLoaderClient_OnStartLoadingResponseBody_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClient_OnStartLoadingResponseBody_Params.generate = function(generator_) {
    var generated = new URLLoaderClient_OnStartLoadingResponseBody_Params;
    generated.body = generator_.generateDataPipeConsumer(false);
    return generated;
  };

  URLLoaderClient_OnStartLoadingResponseBody_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.body = mutator_.mutateDataPipeConsumer(this.body, false);
    }
    return this;
  };
  URLLoaderClient_OnStartLoadingResponseBody_Params.prototype.getHandleDeps = function() {
    var handles = [];
    if (this.body !== null) {
      Array.prototype.push.apply(handles, ["handle<data_pipe_consumer>"]);
    }
    return handles;
  };

  URLLoaderClient_OnStartLoadingResponseBody_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClient_OnStartLoadingResponseBody_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    this.body = handles[idx++];;
    return idx;
  };

  URLLoaderClient_OnStartLoadingResponseBody_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnStartLoadingResponseBody_Params.body
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnStartLoadingResponseBody_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnStartLoadingResponseBody_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnStartLoadingResponseBody_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.body = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderClient_OnStartLoadingResponseBody_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnStartLoadingResponseBody_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.body);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function URLLoaderClient_OnComplete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderClient_OnComplete_Params.prototype.initDefaults_ = function() {
    this.status = null;
  };
  URLLoaderClient_OnComplete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };
  URLLoaderClient_OnComplete_Params.generate = function(generator_) {
    var generated = new URLLoaderClient_OnComplete_Params;
    generated.status = generator_.generateStruct(network.mojom.URLLoaderCompletionStatus, false);
    return generated;
  };

  URLLoaderClient_OnComplete_Params.prototype.mutate = function(mutator_) {
    if (mutator_.chooseMutateField()) {
      this.status = mutator_.mutateStruct(this.status, network.mojom.URLLoaderCompletionStatus, false);
    }
    return this;
  };
  URLLoaderClient_OnComplete_Params.prototype.getHandleDeps = function() {
    var handles = [];
    return handles;
  };

  URLLoaderClient_OnComplete_Params.prototype.setHandles = function() {
    this.setHandlesInternal_(arguments, 0);
  };
  URLLoaderClient_OnComplete_Params.prototype.setHandlesInternal_ = function(handles, idx) {
    return idx;
  };

  URLLoaderClient_OnComplete_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderClient_OnComplete_Params.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLLoaderCompletionStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderClient_OnComplete_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderClient_OnComplete_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderClient_OnComplete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStructPointer(URLLoaderCompletionStatus);
    return val;
  };

  URLLoaderClient_OnComplete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderClient_OnComplete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLLoaderCompletionStatus, val.status);
  };
  var kURLLoader_FollowRedirect_Name = 380440857;
  var kURLLoader_ProceedWithResponse_Name = 922096107;
  var kURLLoader_SetPriority_Name = 1414066227;
  var kURLLoader_PauseReadingBodyFromNet_Name = 1959236557;
  var kURLLoader_ResumeReadingBodyFromNet_Name = 1584153875;

  function URLLoaderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(URLLoader,
                                                   handleOrPtrInfo);
  }

  function URLLoaderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        URLLoader, associatedInterfacePtrInfo);
  }

  URLLoaderAssociatedPtr.prototype =
      Object.create(URLLoaderPtr.prototype);
  URLLoaderAssociatedPtr.prototype.constructor =
      URLLoaderAssociatedPtr;

  function URLLoaderProxy(receiver) {
    this.receiver_ = receiver;
  }
  URLLoaderPtr.prototype.followRedirect = function() {
    return URLLoaderProxy.prototype.followRedirect
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.followRedirect = function(toBeRemovedRequestHeaders, modifiedRequestHeaders) {
    var params_ = new URLLoader_FollowRedirect_Params();
    params_.toBeRemovedRequestHeaders = toBeRemovedRequestHeaders;
    params_.modifiedRequestHeaders = modifiedRequestHeaders;
    var builder = new codec.MessageV0Builder(
        kURLLoader_FollowRedirect_Name,
        codec.align(URLLoader_FollowRedirect_Params.encodedSize));
    builder.encodeStruct(URLLoader_FollowRedirect_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderPtr.prototype.proceedWithResponse = function() {
    return URLLoaderProxy.prototype.proceedWithResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.proceedWithResponse = function() {
    var params_ = new URLLoader_ProceedWithResponse_Params();
    var builder = new codec.MessageV0Builder(
        kURLLoader_ProceedWithResponse_Name,
        codec.align(URLLoader_ProceedWithResponse_Params.encodedSize));
    builder.encodeStruct(URLLoader_ProceedWithResponse_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderPtr.prototype.setPriority = function() {
    return URLLoaderProxy.prototype.setPriority
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.setPriority = function(priority, intraPriorityValue) {
    var params_ = new URLLoader_SetPriority_Params();
    params_.priority = priority;
    params_.intraPriorityValue = intraPriorityValue;
    var builder = new codec.MessageV0Builder(
        kURLLoader_SetPriority_Name,
        codec.align(URLLoader_SetPriority_Params.encodedSize));
    builder.encodeStruct(URLLoader_SetPriority_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderPtr.prototype.pauseReadingBodyFromNet = function() {
    return URLLoaderProxy.prototype.pauseReadingBodyFromNet
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.pauseReadingBodyFromNet = function() {
    var params_ = new URLLoader_PauseReadingBodyFromNet_Params();
    var builder = new codec.MessageV0Builder(
        kURLLoader_PauseReadingBodyFromNet_Name,
        codec.align(URLLoader_PauseReadingBodyFromNet_Params.encodedSize));
    builder.encodeStruct(URLLoader_PauseReadingBodyFromNet_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderPtr.prototype.resumeReadingBodyFromNet = function() {
    return URLLoaderProxy.prototype.resumeReadingBodyFromNet
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderProxy.prototype.resumeReadingBodyFromNet = function() {
    var params_ = new URLLoader_ResumeReadingBodyFromNet_Params();
    var builder = new codec.MessageV0Builder(
        kURLLoader_ResumeReadingBodyFromNet_Name,
        codec.align(URLLoader_ResumeReadingBodyFromNet_Params.encodedSize));
    builder.encodeStruct(URLLoader_ResumeReadingBodyFromNet_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function URLLoaderStub(delegate) {
    this.delegate_ = delegate;
  }
  URLLoaderStub.prototype.followRedirect = function(toBeRemovedRequestHeaders, modifiedRequestHeaders) {
    return this.delegate_ && this.delegate_.followRedirect && this.delegate_.followRedirect(toBeRemovedRequestHeaders, modifiedRequestHeaders);
  }
  URLLoaderStub.prototype.proceedWithResponse = function() {
    return this.delegate_ && this.delegate_.proceedWithResponse && this.delegate_.proceedWithResponse();
  }
  URLLoaderStub.prototype.setPriority = function(priority, intraPriorityValue) {
    return this.delegate_ && this.delegate_.setPriority && this.delegate_.setPriority(priority, intraPriorityValue);
  }
  URLLoaderStub.prototype.pauseReadingBodyFromNet = function() {
    return this.delegate_ && this.delegate_.pauseReadingBodyFromNet && this.delegate_.pauseReadingBodyFromNet();
  }
  URLLoaderStub.prototype.resumeReadingBodyFromNet = function() {
    return this.delegate_ && this.delegate_.resumeReadingBodyFromNet && this.delegate_.resumeReadingBodyFromNet();
  }

  URLLoaderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoader_FollowRedirect_Name:
      var params = reader.decodeStruct(URLLoader_FollowRedirect_Params);
      this.followRedirect(params.toBeRemovedRequestHeaders, params.modifiedRequestHeaders);
      return true;
    case kURLLoader_ProceedWithResponse_Name:
      var params = reader.decodeStruct(URLLoader_ProceedWithResponse_Params);
      this.proceedWithResponse();
      return true;
    case kURLLoader_SetPriority_Name:
      var params = reader.decodeStruct(URLLoader_SetPriority_Params);
      this.setPriority(params.priority, params.intraPriorityValue);
      return true;
    case kURLLoader_PauseReadingBodyFromNet_Name:
      var params = reader.decodeStruct(URLLoader_PauseReadingBodyFromNet_Params);
      this.pauseReadingBodyFromNet();
      return true;
    case kURLLoader_ResumeReadingBodyFromNet_Name:
      var params = reader.decodeStruct(URLLoader_ResumeReadingBodyFromNet_Params);
      this.resumeReadingBodyFromNet();
      return true;
    default:
      return false;
    }
  };

  URLLoaderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateURLLoaderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLLoader_FollowRedirect_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_FollowRedirect_Params;
      break;
      case kURLLoader_ProceedWithResponse_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_ProceedWithResponse_Params;
      break;
      case kURLLoader_SetPriority_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_SetPriority_Params;
      break;
      case kURLLoader_PauseReadingBodyFromNet_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_PauseReadingBodyFromNet_Params;
      break;
      case kURLLoader_ResumeReadingBodyFromNet_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoader_ResumeReadingBodyFromNet_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLLoaderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var URLLoader = {
    name: 'network.mojom.URLLoader',
    kVersion: 0,
    ptrClass: URLLoaderPtr,
    proxyClass: URLLoaderProxy,
    stubClass: URLLoaderStub,
    validateRequest: validateURLLoaderRequest,
    validateResponse: null,
    mojomId: 'services/network/public/mojom/url_loader.mojom',
    fuzzMethods: {
      followRedirect: {
        params: URLLoader_FollowRedirect_Params,
      },
      proceedWithResponse: {
        params: URLLoader_ProceedWithResponse_Params,
      },
      setPriority: {
        params: URLLoader_SetPriority_Params,
      },
      pauseReadingBodyFromNet: {
        params: URLLoader_PauseReadingBodyFromNet_Params,
      },
      resumeReadingBodyFromNet: {
        params: URLLoader_ResumeReadingBodyFromNet_Params,
      },
    },
  };
  URLLoader.kClientDisconnectReason = 1,
  URLLoaderStub.prototype.validator = validateURLLoaderRequest;
  URLLoaderProxy.prototype.validator = null;
  var kURLLoaderClient_OnReceiveResponse_Name = 1246708499;
  var kURLLoaderClient_OnReceiveRedirect_Name = 1304062079;
  var kURLLoaderClient_OnUploadProgress_Name = 1047708944;
  var kURLLoaderClient_OnReceiveCachedMetadata_Name = 1074499706;
  var kURLLoaderClient_OnTransferSizeUpdated_Name = 902364755;
  var kURLLoaderClient_OnStartLoadingResponseBody_Name = 1568079578;
  var kURLLoaderClient_OnComplete_Name = 358866823;

  function URLLoaderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(URLLoaderClient,
                                                   handleOrPtrInfo);
  }

  function URLLoaderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        URLLoaderClient, associatedInterfacePtrInfo);
  }

  URLLoaderClientAssociatedPtr.prototype =
      Object.create(URLLoaderClientPtr.prototype);
  URLLoaderClientAssociatedPtr.prototype.constructor =
      URLLoaderClientAssociatedPtr;

  function URLLoaderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  URLLoaderClientPtr.prototype.onReceiveResponse = function() {
    return URLLoaderClientProxy.prototype.onReceiveResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onReceiveResponse = function(head) {
    var params_ = new URLLoaderClient_OnReceiveResponse_Params();
    params_.head = head;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnReceiveResponse_Name,
        codec.align(URLLoaderClient_OnReceiveResponse_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnReceiveResponse_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onReceiveRedirect = function() {
    return URLLoaderClientProxy.prototype.onReceiveRedirect
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onReceiveRedirect = function(redirectInfo, head) {
    var params_ = new URLLoaderClient_OnReceiveRedirect_Params();
    params_.redirectInfo = redirectInfo;
    params_.head = head;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnReceiveRedirect_Name,
        codec.align(URLLoaderClient_OnReceiveRedirect_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnReceiveRedirect_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onUploadProgress = function() {
    return URLLoaderClientProxy.prototype.onUploadProgress
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onUploadProgress = function(currentPosition, totalSize) {
    var params_ = new URLLoaderClient_OnUploadProgress_Params();
    params_.currentPosition = currentPosition;
    params_.totalSize = totalSize;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kURLLoaderClient_OnUploadProgress_Name,
          codec.align(URLLoaderClient_OnUploadProgress_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLLoaderClient_OnUploadProgress_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLLoaderClient_OnUploadProgress_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  URLLoaderClientPtr.prototype.onReceiveCachedMetadata = function() {
    return URLLoaderClientProxy.prototype.onReceiveCachedMetadata
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onReceiveCachedMetadata = function(data) {
    var params_ = new URLLoaderClient_OnReceiveCachedMetadata_Params();
    params_.data = data;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnReceiveCachedMetadata_Name,
        codec.align(URLLoaderClient_OnReceiveCachedMetadata_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnReceiveCachedMetadata_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onTransferSizeUpdated = function() {
    return URLLoaderClientProxy.prototype.onTransferSizeUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onTransferSizeUpdated = function(transferSizeDiff) {
    var params_ = new URLLoaderClient_OnTransferSizeUpdated_Params();
    params_.transferSizeDiff = transferSizeDiff;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnTransferSizeUpdated_Name,
        codec.align(URLLoaderClient_OnTransferSizeUpdated_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnTransferSizeUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onStartLoadingResponseBody = function() {
    return URLLoaderClientProxy.prototype.onStartLoadingResponseBody
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onStartLoadingResponseBody = function(body) {
    var params_ = new URLLoaderClient_OnStartLoadingResponseBody_Params();
    params_.body = body;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnStartLoadingResponseBody_Name,
        codec.align(URLLoaderClient_OnStartLoadingResponseBody_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnStartLoadingResponseBody_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLLoaderClientPtr.prototype.onComplete = function() {
    return URLLoaderClientProxy.prototype.onComplete
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderClientProxy.prototype.onComplete = function(status) {
    var params_ = new URLLoaderClient_OnComplete_Params();
    params_.status = status;
    var builder = new codec.MessageV0Builder(
        kURLLoaderClient_OnComplete_Name,
        codec.align(URLLoaderClient_OnComplete_Params.encodedSize));
    builder.encodeStruct(URLLoaderClient_OnComplete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function URLLoaderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  URLLoaderClientStub.prototype.onReceiveResponse = function(head) {
    return this.delegate_ && this.delegate_.onReceiveResponse && this.delegate_.onReceiveResponse(head);
  }
  URLLoaderClientStub.prototype.onReceiveRedirect = function(redirectInfo, head) {
    return this.delegate_ && this.delegate_.onReceiveRedirect && this.delegate_.onReceiveRedirect(redirectInfo, head);
  }
  URLLoaderClientStub.prototype.onUploadProgress = function(currentPosition, totalSize) {
    return this.delegate_ && this.delegate_.onUploadProgress && this.delegate_.onUploadProgress(currentPosition, totalSize);
  }
  URLLoaderClientStub.prototype.onReceiveCachedMetadata = function(data) {
    return this.delegate_ && this.delegate_.onReceiveCachedMetadata && this.delegate_.onReceiveCachedMetadata(data);
  }
  URLLoaderClientStub.prototype.onTransferSizeUpdated = function(transferSizeDiff) {
    return this.delegate_ && this.delegate_.onTransferSizeUpdated && this.delegate_.onTransferSizeUpdated(transferSizeDiff);
  }
  URLLoaderClientStub.prototype.onStartLoadingResponseBody = function(body) {
    return this.delegate_ && this.delegate_.onStartLoadingResponseBody && this.delegate_.onStartLoadingResponseBody(body);
  }
  URLLoaderClientStub.prototype.onComplete = function(status) {
    return this.delegate_ && this.delegate_.onComplete && this.delegate_.onComplete(status);
  }

  URLLoaderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoaderClient_OnReceiveResponse_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnReceiveResponse_Params);
      this.onReceiveResponse(params.head);
      return true;
    case kURLLoaderClient_OnReceiveRedirect_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnReceiveRedirect_Params);
      this.onReceiveRedirect(params.redirectInfo, params.head);
      return true;
    case kURLLoaderClient_OnReceiveCachedMetadata_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnReceiveCachedMetadata_Params);
      this.onReceiveCachedMetadata(params.data);
      return true;
    case kURLLoaderClient_OnTransferSizeUpdated_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnTransferSizeUpdated_Params);
      this.onTransferSizeUpdated(params.transferSizeDiff);
      return true;
    case kURLLoaderClient_OnStartLoadingResponseBody_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnStartLoadingResponseBody_Params);
      this.onStartLoadingResponseBody(params.body);
      return true;
    case kURLLoaderClient_OnComplete_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnComplete_Params);
      this.onComplete(params.status);
      return true;
    default:
      return false;
    }
  };

  URLLoaderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoaderClient_OnUploadProgress_Name:
      var params = reader.decodeStruct(URLLoaderClient_OnUploadProgress_Params);
      this.onUploadProgress(params.currentPosition, params.totalSize).then(function(response) {
        var responseParams =
            new URLLoaderClient_OnUploadProgress_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kURLLoaderClient_OnUploadProgress_Name,
            codec.align(URLLoaderClient_OnUploadProgress_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLLoaderClient_OnUploadProgress_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateURLLoaderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLLoaderClient_OnReceiveResponse_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnReceiveResponse_Params;
      break;
      case kURLLoaderClient_OnReceiveRedirect_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnReceiveRedirect_Params;
      break;
      case kURLLoaderClient_OnUploadProgress_Name:
        if (message.expectsResponse())
          paramsClass = URLLoaderClient_OnUploadProgress_Params;
      break;
      case kURLLoaderClient_OnReceiveCachedMetadata_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnReceiveCachedMetadata_Params;
      break;
      case kURLLoaderClient_OnTransferSizeUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnTransferSizeUpdated_Params;
      break;
      case kURLLoaderClient_OnStartLoadingResponseBody_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnStartLoadingResponseBody_Params;
      break;
      case kURLLoaderClient_OnComplete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderClient_OnComplete_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLLoaderClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kURLLoaderClient_OnUploadProgress_Name:
        if (message.isResponse())
          paramsClass = URLLoaderClient_OnUploadProgress_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var URLLoaderClient = {
    name: 'network.mojom.URLLoaderClient',
    kVersion: 0,
    ptrClass: URLLoaderClientPtr,
    proxyClass: URLLoaderClientProxy,
    stubClass: URLLoaderClientStub,
    validateRequest: validateURLLoaderClientRequest,
    validateResponse: validateURLLoaderClientResponse,
    mojomId: 'services/network/public/mojom/url_loader.mojom',
    fuzzMethods: {
      onReceiveResponse: {
        params: URLLoaderClient_OnReceiveResponse_Params,
      },
      onReceiveRedirect: {
        params: URLLoaderClient_OnReceiveRedirect_Params,
      },
      onUploadProgress: {
        params: URLLoaderClient_OnUploadProgress_Params,
      },
      onReceiveCachedMetadata: {
        params: URLLoaderClient_OnReceiveCachedMetadata_Params,
      },
      onTransferSizeUpdated: {
        params: URLLoaderClient_OnTransferSizeUpdated_Params,
      },
      onStartLoadingResponseBody: {
        params: URLLoaderClient_OnStartLoadingResponseBody_Params,
      },
      onComplete: {
        params: URLLoaderClient_OnComplete_Params,
      },
    },
  };
  URLLoaderClientStub.prototype.validator = validateURLLoaderClientRequest;
  URLLoaderClientProxy.prototype.validator = validateURLLoaderClientResponse;
  exports.RequestPriority = RequestPriority;
  exports.URLRequest = URLRequest;
  exports.URLResponseHead = URLResponseHead;
  exports.URLRequestRedirectInfo = URLRequestRedirectInfo;
  exports.CORSErrorStatus = CORSErrorStatus;
  exports.URLLoaderCompletionStatus = URLLoaderCompletionStatus;
  exports.URLLoaderClientEndpoints = URLLoaderClientEndpoints;
  exports.URLLoader = URLLoader;
  exports.URLLoaderPtr = URLLoaderPtr;
  exports.URLLoaderAssociatedPtr = URLLoaderAssociatedPtr;
  exports.URLLoaderClient = URLLoaderClient;
  exports.URLLoaderClientPtr = URLLoaderClientPtr;
  exports.URLLoaderClientAssociatedPtr = URLLoaderClientAssociatedPtr;
})();