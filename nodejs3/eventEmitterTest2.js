// EventEmitter를 이용한 비동기작업 스케쥴링 — 공항 프로세스
const EventEmitter = require('events');
const em = new EventEmitter();

em.on('checkin', () => {
  console.log('항공권발급');
  security();
});
em.on('security', () => {
  console.log('보안검색완료');
});

function checkIn() {
  console.log("check in");
  setTimeout(()=>{em.emit('checkin');}, 5000);
}
function security() {
  console.log("security check");
  setTimeout(()=>{em.emit('security');}, 3000);
}
checkIn()
