// read -> write 파이프 예 — readStream.pipe(writeStream)
const fs = require('fs');

const readStream = fs.createReadStream('./file/largefile.txt');
const writeStream = fs.createWriteStream('outputFile.txt');

readStream.pipe(writeStream);
// writeStream.end()  쓰기가 완료되면 pipe()가 자동으로 수행해줌
writeStream.on('finish', () => {
  console.log('pipe finished');
});
