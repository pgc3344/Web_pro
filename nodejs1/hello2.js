// 콜스택 동작 (hello2.js)
// 콜스택: logger → welcome → console.log 순으로 쌓였다가 거꾸로 빠짐
// 실행: node nodejs1/hello2.js

function logger() {
    welcome();
}

function welcome() {
    console.log('welcome');
    console.trace('콜스택 확인');  // 현재 콜스택 출력 (welcome ← logger ← 전역)
}

logger();
