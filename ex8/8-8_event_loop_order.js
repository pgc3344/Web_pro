// 8-8. 이벤트루프 - 콜스택 → 마이크로태스크큐 → 콜백(태스크)큐 순서
// 실행: node ex8/8-8_event_loop_order.js

console.log("1. 동기 코드 시작");

setTimeout(() => console.log("4. 콜백큐(setTimeout 0ms)"), 0);

Promise.resolve().then(() => console.log("3. 마이크로태스크큐(Promise)"));

console.log("2. 동기 코드 끝");
