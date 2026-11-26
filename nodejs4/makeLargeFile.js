// 실습용 대용량 텍스트 파일 생성 — file/largefile.txt(약 5MB), file/largerfile.txt(약 50MB)
// 사용법: node makeLargeFile.js
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'file');
fs.mkdirSync(dir, { recursive: true });

function make(name, lines) {
  const writeStream = fs.createWriteStream(path.join(dir, name));
  for (let i = 1; i <= lines; i++) {
    writeStream.write(`${i}: Node.js stream practice line - chunk 단위로 읽고 쓰는 데이터 채널\n`);
  }
  writeStream.end(() => {
    console.log(`${name} 생성 완료 (${fs.statSync(path.join(dir, name)).size} bytes)`);
  });
}

make('largefile.txt', 70000);
make('largerfile.txt', 700000);
