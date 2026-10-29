// 8-3. 콜스택 동작 (hello2.js)
// 콜스택: logger → welcome → console.log 순으로 쌓였다가 거꾸로 빠짐
// 실행: node ex8/8-3_callstack_hello2.js

function logger() {
    welcome();
}

function welcome() {
    console.log('welcome');
    console.trace('콜스택 확인');  // 현재 콜스택 출력 (welcome ← logger ← 전역)
}

logger();
