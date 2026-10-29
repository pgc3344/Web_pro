// 8-5. 여러 개의 콜백 - 함수표현식과 화살표 함수를 콜백으로 전달
// 실행: node ex8/8-5_multi_callback.js

function test(text, call1, call2) {
    let x = y = 2;
    console.log(call1(x, y));  // 4
    console.log(call2(x, y));  // 0
    console.log(text);
};

let sum = function (x, y) {
    return (x + y);
};

test("hello", sum,
    (x, y) => { return x - y; });
