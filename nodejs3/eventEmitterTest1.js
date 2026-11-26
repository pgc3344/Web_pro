// 이벤트 트리거/처리 예 + 'data' 이벤트와 리스너 추가
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', number => {
  console.log(`listener ${number} started`);
});
// 추가: 'data' 이벤트 리스너 — 문자열과 정수를 받아 출력
eventEmitter.on('data', (str, num) => {
  console.log(`data event: ${str} ${num}`);
});

eventEmitter.emit('start', 1);
eventEmitter.emit('data', 'hello', 100); // 이벤트 데이터: 문자열과 정수
