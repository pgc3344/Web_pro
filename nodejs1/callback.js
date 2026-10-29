// 콜백(callback) 함수 - 다른 함수의 인수로 주어져 나중에 호출되는 함수
// 실행: node nodejs1/callback.js

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye! ');
}

greet('Alice', sayGoodbye);
