// 스트림 읽기 예 — createReadStream()으로 파일을 chunk 단위로 읽는다
const fs = require('fs');
const readStream = fs.createReadStream('./file/largefile.txt', {
  highWaterMark: 1024 * 128, // 버퍼 임계치 (Default 64KB)
});
readStream.on('data', chunk => {
  console.log(chunk.length);
  //console.log(chunk.toString());
});
readStream.on('end', () => {
  console.log('end of stream');
});
