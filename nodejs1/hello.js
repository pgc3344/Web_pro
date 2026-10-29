// Node.js 런타임 구성 - 동기 호출과 setTimeout 비동기 호출
// 실행: node nodejs1/hello.js

function hello() {
    console.log("Hello");
}

hello();                  // 콜스택에서 바로 실행
setTimeout(hello, 2000);  // libuv 타이머 → 2초 뒤 콜백큐 → 이벤트루프가 콜스택으로 올림
