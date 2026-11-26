// 비디오 스트리밍 서버 — Range 요청을 206 Partial Content로 처리
// 브라우저: http://127.0.0.1:8282/html/movie.html
const http = require('http');
const url = require('url');
const fs = require('fs');

process.chdir(__dirname);

const server = http.createServer(function(req,res){
  let parsedUrl = url.parse(req.url);
  let resource = decodeURIComponent(parsedUrl.pathname);
  let resourcePath = '.'+resource;

  if(resource.indexOf('/html/') == 0) {
    fs.readFile(resourcePath, 'utf-8', function(err, data) {
      if(err) {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('404 Page Not Found');
        return;
      }
      res.writeHead(200, {'Content-Type':'text/html'});
      res.end(data);
    });
  } else if(resource.indexOf('/video/') == 0) {
    if(!fs.existsSync(resourcePath)) {
      res.writeHead(404, {'Content-Type':'text/html'});
      res.end('404 Page Not Found');
      return;
    }
    let range = req.headers.range || 'bytes=0-';
    const CHUNK_SIZE = 1024*1024;
    let videoSize = fs.statSync(resourcePath).size;
    let start = Number(range.replace(/bytes=/, "").split("-")[0]); // 시작번호 추출
    let end = Math.min(start + CHUNK_SIZE, videoSize - 1); // 끝 위치는 파일 크기-1 보다 클 수 없음
    let contentLength = end - start + 1;
    let headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
    console.log(`range ${start}-${end}/${videoSize}`);
    res.writeHead(206, headers);
    let videoStream = fs.createReadStream(resourcePath, {start, end});
    videoStream.pipe(res);
  } else {
    res.writeHead(404, {'Content-Type':'text/html'});
    res.end('404 Page Not Found');
  }
});
server.listen(8282, function(){
  console.log('Server is running...');
});
