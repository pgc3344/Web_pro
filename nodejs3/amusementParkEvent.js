// 연습: 이벤트 객체를 이용한 스케쥴링을 놀이동산 문제에 적용
// 바이킹(5초) → 티익스프레스(7초) → 허리케인(3초) 순서로, 끝날 때마다 이벤트를 발생시켜 다음 기구를 탄다
const EventEmitter = require('events');
const em = new EventEmitter();

function viking() {
  console.log('바이킹 탑승');
  setTimeout(()=>{em.emit('viking');}, 5000);
}
function t_express() {
  console.log('티익스프레스 탑승');
  setTimeout(()=>{em.emit('t_express');}, 7000);
}
function hurricane() {
  console.log('허리케인 탑승');
  setTimeout(()=>{em.emit('hurricane');}, 3000);
}

em.on('viking', () => {
  console.log('Viking is fantastic!');
  t_express();
});
em.on('t_express', () => {
  console.log('T-express is frightening!');
  hurricane();
});
em.on('hurricane', () => {
  console.log('Hurricane is dizzy!');
  console.log('이벤트: 놀이기구 끝');
});

viking();
console.log('놀이공원 입장 (event)...');
