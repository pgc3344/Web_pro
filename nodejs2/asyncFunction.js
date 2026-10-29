// 자바스크립트 Async 함수 - 항상 프로미스를 반환
// 실행: node nodejs2/asyncFunction.js

async function f1() {
    return Promise.resolve(1);
}

async function f2() {
    return 1;  // 자동으로 Promise.resolve(1)로 감싸짐
}

f1().then((result) => { console.log("f1:", result) });
f2().then((result) => { console.log("f2:", result) });
console.log("f2() 반환값은 Promise인가?", f2() instanceof Promise);
