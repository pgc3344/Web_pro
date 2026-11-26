// 파일 다운로드 서버 — data/end 이벤트로 파일 스트림을 응답 스트림에 쓴다
// 브라우저: http://127.0.0.1:8282/files.html
const http = require('http');
const url = require('url');
const fs = require('fs');

process.chdir(__dirname); // 어느 폴더에서 실행해도 nodejs4 기준으로 파일을 찾는다

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
    console.log('start streaming');
    res.writeHead(200, {'Content-Type':'text/plain'});
    fileStream.on('data', function(data) {
      res.write(data);
    });
    fileStream.on('end', function () {
      console.log('end streaming');
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type':'text/html'});
    res.end('404 Page Not Found');
  }
});
server.listen(8282, function(){
  console.log('Server is running...');
});
