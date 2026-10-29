// 이벤트루프 - fs.readFile('test.txt', callback) 비동기 파일 읽기
// 실행: node nodejs1/readFile.js

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'test.txt');

fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.log("읽기 실패:", err.message);
        return;
    }
    console.log("파일 내용:", data.trim());
});

console.log("readFile 요청 후 다음 코드 실행");
