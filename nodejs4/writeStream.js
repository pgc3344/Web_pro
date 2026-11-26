// 스트림 쓰기 예 — createWriteStream()으로 같은 데이터를 반복해서 쓴다
const fs = require('fs');
const data = fs.readFileSync('./file/largefile.txt');
const writeStream = fs.createWriteStream('output.txt');
for (let i = 1; i < 100; i++) {
  writeStream.write(data);
}
writeStream.end(() => {
  console.log('write stream closed');
});
