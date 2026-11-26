// 파일 다운로드 서버 — pipe()를 이용한 스트림 연결
// 브라우저: http://127.0.0.1:8282/files.html
const http = require('http');
const url = require('url');
const fs = require('fs');

process.chdir(__dirname);

const server = http.createServer(function(req,res){
  let parsedUrl = url.parse(req.url);
  let resource = parsedUrl.pathname;
  let resourcePath = '.'+resource;

  if(resource == '/files.html') {
    fs.readFile(resourcePath, 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.end(data);
    });
  } else if(resource.indexOf('/file/') == 0) {
    let fileStream = fs.createReadStream(resourcePath);
    res.writeHead(200, {'Content-Type':'text/html'});
    console.log('start streaming');
    fileStream.pipe(res); // fileStream의 data를 res 스트림으로 연결
  } else {
    res.writeHead(404, {'Content-Type':'text/html'});
    res.end('404 Page Not Found');
  }
});
server.listen(8282, function(){
  console.log('Server is running...');
});
