const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    let _url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(`<h1> URL => ${_url} </h1>`);
    res.end();
});

server.listen(8282, () => {
    console.log('http://127.0.0.1:8282/path/class.php?id=2018123&class=web&mid=100');
});
