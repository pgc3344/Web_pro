// setTimeout() 전역함수 - let timerId = setTimeout(func, [delay], [arg1], ...)
// 실행: node nodejs1/setTimeout.js

setTimeout(() => {
    console.log("1초 지연.");
}, 1000);

// 함수에 전달할 인수(arg1, ...) 사용
function sayHi(phrase, who) {
    console.log(phrase + ", " + who);
}
setTimeout(sayHi, 1500, "안녕하세요", "홍길동");

// clearTimeout으로 예약 취소 - 출력되지 않음
let timerId = setTimeout(() => console.log("취소되어 출력 안 됨"), 2000);
clearTimeout(timerId);
