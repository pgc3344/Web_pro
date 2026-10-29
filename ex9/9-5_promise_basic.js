// 9-5. promise 기본 구조 - executor, resolve/reject, then/catch
// 프로미스의 상태는 한번 결정되면 변경이 안 됨 → 뒤의 reject는 무시됨
// 실행: node ex9/9-5_promise_basic.js

let promise = new Promise(function (resolve, reject) {
    resolve("promise resolved");
    reject("promise rejected");  // 이미 fulfilled라 무시
});

promise
    .then((result) => { console.log(result) })
    .catch((error) => { console.log(error) });
