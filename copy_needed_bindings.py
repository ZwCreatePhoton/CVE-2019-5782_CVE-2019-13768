#! /usr/bin/python

import jsmin
import os
import re
import shutil
import sys

version = '71.0.3578.98'

needed_bindings = [
  'components/services/filesystem/public/interfaces/types.mojom.js',
  
  'mojo/public/js/mojo_bindings.js',
  
  'mojo/public/mojom/base/big_buffer.mojom.js',
  'mojo/public/mojom/base/file.mojom.js',
  'mojo/public/mojom/base/file_error.mojom.js',
  'mojo/public/mojom/base/file_path.mojom.js',
  'mojo/public/mojom/base/file_info.mojom.js',
  'mojo/public/mojom/base/string16.mojom.js',
  'mojo/public/mojom/base/time.mojom.js',
  'mojo/public/mojom/base/unguessable_token.mojom.js',

  'services/network/public/mojom/data_pipe_getter.mojom.js',
  'services/network/public/mojom/http_request_headers.mojom.js',
  'services/network/public/mojom/mutable_network_traffic_annotation_tag.mojom.js',
  'services/network/public/mojom/network_param.mojom.js',
  'services/network/public/mojom/url_loader.mojom.js',
  'services/network/public/mojom/url_loader_factory.mojom.js',
  
  'third_party/blink/public/mojom/blob/blob.mojom.js',
  'third_party/blink/public/mojom/blob/blob_registry.mojom.js',
  'third_party/blink/public/mojom/blob/blob_url_store.mojom.js',
  'third_party/blink/public/mojom/blob/data_element.mojom.js',
  'third_party/blink/public/mojom/blob/serialized_blob.mojom.js',
  
  'third_party/blink/public/mojom/filesystem/file_system.mojom.js',
  'third_party/blink/public/mojom/filesystem/file_writer.mojom.js',
  
  'url/mojom/origin.mojom.js',
  'url/mojom/url.mojom.js',
]

def minify(src_path, dst_path):
  data = ''
  with open(src_path, 'r') as tmp:
    #data = jsmin.jsmin(tmp.read())
    data = tmp.read()
  with open(dst_path, 'w') as tmp:
    tmp.write(data)

src_base = '/ssd/chrome_{}/src/out/Release/gen'.format(version)
src_base = '/ssd/exploits_new/chrome/file_writer/winrel'
dst_base = './win_{}/'.format(version)
for file in needed_bindings:
  src_path = os.path.join(src_base, file)
  dst_path = os.path.join(dst_base, file)
  try:
    os.makedirs(os.path.dirname(dst_path))
  except:
    pass
  minify(src_path, dst_path)