// 8-7. 비동기작업 실행 - 동기 I/O vs 비동기 I/O
// 실행: node ex8/8-7_sync_async_io.js

// 동기 I/O - 순서대로 실행
console.log("First Job");
console.log("Second Job");
console.log("Third Job");

// 비동기 I/O - libuv 쓰레드에서 대기 후 콜백 실행
setTimeout(() => {
    console.log("First Job (2초 후)");
}, 2000);
setTimeout(() => {
    console.log("Second Job (3초 후)");
}, 3000);
console.log("Third Job (바로 실행)");
