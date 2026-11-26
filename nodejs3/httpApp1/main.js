// 연습1 — index.html 문서를 서비스하도록 라우팅 추가 (메인 페이지 index.html, 로그인 페이지 login.html)
// 로그인 폼 데이터는 POST 메쏘드로 받는다
// 실행: node nodejs3/httpApp1/main.js   브라우저: http://127.0.0.1:8282/
const fs = require('fs');
const http = require('http');
const url = require('url');
const qstring = require('querystring');

process.chdir(__dirname); // 어느 폴더에서 실행해도 html 파일을 찾는다

const server = http.createServer(function (req, res) {
  const method = req.method;
  const _url = url.parse(req.url); //req.url->path(pathname+search)
  let path = _url.pathname;

  if( method == 'GET' ) {
    if( path == '/' || path == '/index.html' ) {
      path = './index.html'
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(path));
    } else if( path == '/login.html' ) {
      path = './login.html'
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(path));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Page Not Found!</h1>');
    }
  }
  if( method == 'POST') {
    if( path == '/login' ){
      let reqBody = '';
      req.on('data', (data) => {
        reqBody += data;
        //console.log(reqBody);
      })
      req.on('end', () => {
        const qs = qstring.parse(reqBody);
        const _name = qs.name;
        const _passwd = qs.passwd;
        let resBody =
          `<BODY><H1>name: ${_name} password: ${_passwd}</H1>
           <a href="/">main page</a></BODY>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(resBody);
      })
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Page Not Found!</h1>');
    }
  }
})
server.listen(8282)
console.log("Server running at http://localhost:8282");
