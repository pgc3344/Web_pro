// 콜스택 동작 (hello1.js)
// greet → 실행 후 제거, welcome → 실행 후 제거 (LIFO)
// 실행: node nodejs1/hello1.js

function greet(name) {
    console.log('Hello, ' + name);
}
function welcome() {
    console.log('Welcome to JS');
}
greet('Kim');
welcome();
