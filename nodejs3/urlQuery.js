const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    for (let key in query) {
        res.write(`<h1>${key} = ${query[key]}</h1>`);
    }
    res.end();
});

server.listen(8282, () => {
    console.log('http://127.0.0.1:8282/path/class.php?id=2018123&class=web&mid=90');
});
