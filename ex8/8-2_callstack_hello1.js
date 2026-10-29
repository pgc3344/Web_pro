// 8-2. 콜스택 동작 (hello1.js)
// greet → 실행 후 제거, welcome → 실행 후 제거 (LIFO)
// 실행: node ex8/8-2_callstack_hello1.js

function greet(name) {
    console.log('Hello, ' + name);
}
function welcome() {
    console.log('Welcome to JS');
}
greet('Kim');
welcome();
