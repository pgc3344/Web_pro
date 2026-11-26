// 통합 서버 — NodeJS-3 연습1·2(로그인 POST/GET) + NodeJS-4 프로그래밍 연습(파일서비스·스트리밍서비스)
//   html 파일 디렉토리 ./html, 파일 디렉토리 ./file, 비디오 디렉토리 ./video
// 실행: node nodejs4/server.js   브라우저: http://127.0.0.1:8282/
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const qstring = require('querystring');

process.chdir(__dirname);

const PORT = 8282;
const CHUNK_SIZE = 1024*1024;

function notFound(res) {
  res.writeHead(404, {'Content-Type':'text/html'});
  res.end('404 Page Not Found');
}

// 사용자 입력을 그대로 HTML에 넣지 않도록 특수문자를 바꾼다
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function sendHtmlFile(res, filePath) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if(err) return notFound(res);
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end(data);
  });
}

function sendLoginResult(res, name, passwd) {
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.end(`<BODY><H1>name: ${escapeHtml(name)} password: ${escapeHtml(passwd)}</H1>
    <a href="/">main page</a></BODY>`);
}

const server = http.createServer(function(req,res){
  let parsedUrl = url.parse(req.url, true); // true -> query를 객체로 파싱
  let resource = path.posix.normalize(decodeURIComponent(parsedUrl.pathname)); // '..' 로 폴더 밖을 못 나가게 정리
  let resourcePath = '.'+resource;

  if(req.method == 'POST') {
    // 연습1) 로그인 폼 데이터를 POST로 받는다 — 데이터는 request body에 있음
    if(resource != '/login') return notFound(res);
    let reqBody = '';
    req.on('data', (data) => {
      reqBody += data;
    });
    req.on('end', () => {
      let qs = qstring.parse(reqBody);
      sendLoginResult(res, qs.name, qs.passwd);
    });
    return;
  }

  if(resource == '/' || resource == '/index.html') {
    // 메인 페이지
    sendHtmlFile(res, './html/index.html');
  } else if(resource == '/login.html') {
    // 로그인 페이지
    sendHtmlFile(res, './html/login.html');
  } else if(resource == '/login') {
    // 연습2) 로그인 폼 데이터를 GET으로 받는다 — 데이터는 URL의 query에 있음
    sendLoginResult(res, parsedUrl.query.name, parsedUrl.query.passwd);
  } else if(resource.indexOf('/html/') == 0) {
    // 1) HTML 페이지
    sendHtmlFile(res, resourcePath);
  } else if(resource.indexOf('/file/') == 0) {
    // 2) 파일 다운로드 — 파일 스트림을 응답 스트림에 pipe
    fs.stat(resourcePath, function(err, stat) {
      if(err || !stat.isFile()) return notFound(res);
      let fileStream = fs.createReadStream(resourcePath);
      console.log('start streaming', resource);
      res.writeHead(200, {
        'Content-Type':'text/plain; charset=utf-8',
        'Content-Length': stat.size,
      });
      fileStream.on('end', function () {
        console.log('end streaming', resource);
      });
      fileStream.pipe(res);
    });
  } else if(resource.indexOf('/video/') == 0) {
    // 3) 비디오 스트리밍 — Range 요청을 206 Partial Content로 응답
    fs.stat(resourcePath, function(err, stat) {
      if(err || !stat.isFile()) return notFound(res);
      let range = req.headers.range || 'bytes=0-';
      let videoSize = stat.size;
      let start = Number(range.replace(/bytes=/, "").split("-")[0]); // 시작번호 추출
      if(!(start >= 0 && start < videoSize)) {
        res.writeHead(416, {'Content-Range': `bytes */${videoSize}`});
        return res.end();
      }
      let end = Math.min(start + CHUNK_SIZE, videoSize - 1); // 끝 위치는 파일 크기-1 보다 클 수 없음
      let contentLength = end - start + 1;
      let headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
      };
      console.log(`video range ${start}-${end}/${videoSize}`);
      res.writeHead(206, headers);
      let videoStream = fs.createReadStream(resourcePath, {start, end});
      videoStream.pipe(res);
    });
  } else {
    notFound(res);
  }
});
server.listen(PORT, function(){
  console.log(`Server is running... http://127.0.0.1:${PORT}/`);
});
