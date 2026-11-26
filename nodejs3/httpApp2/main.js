// 연습2 — login.html 에서 생성되는 요청이 GET으로 처리되도록 라우팅 추가
// 폼 데이터가 body가 아니라 URL(/login?name=kitty&passwd=1234)에 실려 온다
// 실행: node nodejs3/httpApp2/main.js   브라우저: http://127.0.0.1:8282/
const fs = require('fs');
const http = require('http');
const url = require('url');

process.chdir(__dirname);

const server = http.createServer(function (req, res) {
  const method = req.method;
  const _url = url.parse(req.url, true); // true -> query를 객체로 파싱
  let path = _url.pathname;
  let query = _url.query;

  if( method == 'GET' ) {
    if( path == '/' || path == '/index.html' ) {
      path = './index.html'
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(path));
    } else if( path == '/login.html' ) {
      path = './login.html'
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(path));
    } else if( path == '/login' ) {
      // GET 요청의 데이터는 URL의 query에 있음
      const _name = query.name;
      const _passwd = query.passwd;
      let resBody =
        `<BODY><H1>name: ${_name} password: ${_passwd}</H1>
         <a href="/">main page</a></BODY>`;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(resBody);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Page Not Found!</h1>');
    }
  } else {
    // GET 이외의 메쏘드는 처리하지 않음
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found!</h1>');
  }
})
server.listen(8282)
console.log("Server running at http://localhost:8282");
