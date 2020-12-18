import cherrypy
import os
import os.path
import re

def chrome_version():
  ua = cherrypy.request.headers['User-Agent']
  match = re.search('Mozilla\/5\.0 \(X11; Linux x86_64\) AppleWebKit\/\d+\.\d+ \(KHTML, like Gecko\) Chrome\/(\d+\.\d+\.\d+\.\d+) Safari\/\d+\.\d+', ua)
  if match is not None:
    return match.group(1)
  match = re.search('Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\) AppleWebKit\/\d+\.\d+ \(KHTML, like Gecko\) Chrome\/(\d+\.\d+\.\d+\.\d+) Safari\/\d+\.\d+', ua)
  if match is not None:
    return 'win_' + match.group(1)

def chrome_version_path(path):
  return os.path.join('./', chrome_version(), path)

class Server(object):
  def _cp_dispatch(self, vpath):
    path = os.path.join(*vpath)
    cherrypy.request.params['file'] = path
    for i in range(len(vpath)):
      vpath.pop()
    return self

  @cherrypy.expose()
  def index(self, file=None):
    version = chrome_version()
    if not os.path.isdir(version):
      return '<html><body><div>Chrome version {} not supported...</div></body></html>'.format(version)
    elif file is None:
      with open('index.html', 'r') as tmp:
        return tmp.read()
    else:
      with open(chrome_version_path(file), 'r') as tmp:
        return tmp.read()

cherrypy.config.update({
  'log.screen': False,
  'server.socket_port': int(80),
  #'server.socket_host':'127.0.0.1'
  'server.socket_host':'0.0.0.0'
})

cherrypy.tree.mount(Server(), '/')
cherrypy.engine.start()
cherrypy.engine.block()
