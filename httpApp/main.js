// NodeJS-3 연습1·2 — 로그인 서버
//   연습1: index.html(메인 페이지), login.html(로그인 페이지)을 서비스하도록 라우팅 추가
//   연습2: login.html 에서 생성되는 요청이 GET으로 처리되도록 라우팅 추가
//          (POST 로 보내는 폼은 loginPost.html — 연습1의 POST 처리도 그대로 동작)
// 실행: node httpApp/main.js   브라우저: http://127.0.0.1:8282
const fs = require('fs');
const http = require('http');
const url = require('url');
const qstring = require('querystring');

process.chdir(__dirname); // 어느 폴더에서 실행해도 html 파일을 찾는다

// 로그인 결과 페이지
function loginResult(res, _name, _passwd) {
  let resBody =
    `<BODY><H1>name: ${_name} password: ${_passwd}</H1>
     <a href="/">main page</a></BODY>`;
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(resBody);
}

function notFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>Page Not Found!</h1>');
}

const server = http.createServer(function (req, res) {
  const method = req.method;
  const _url = url.parse(req.url, true); // true -> query를 객체로 파싱
  let path = _url.pathname;

  if( method == 'GET' ) {
    if( path == '/' || path == '/index.html' ) {          // 연습1: 메인 페이지
      path = './index.html'
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(path));
    } else if( path == '/login.html' ) {                   // 연습1: 로그인 페이지
      path = './login.html'
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(path));
    } else if( path == '/loginPost.html' ) {               // POST 로그인 폼
      path = './loginPost.html'
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(path));
    } else if( path == '/login' ) {                        // 연습2: GET 요청 -> 데이터는 URL의 query
      const query = _url.query;
      loginResult(res, query.name, query.passwd);
    } else {
      notFound(res);
    }
  } else if( method == 'POST' ) {
    if( path == '/login' ) {                               // 연습1: POST 요청 -> 데이터는 body
      let reqBody = '';
      req.on('data', (data) => {
        reqBody += data;
      })
      req.on('end', () => {
        const qs = qstring.parse(reqBody);
        loginResult(res, qs.name, qs.passwd);
      })
    } else {
      notFound(res);
    }
  } else {
    notFound(res);
  }
})
server.listen(8282, () => {
  console.log("Server running at http://127.0.0.1:8282");
});
