// 문제 7-5. 스택(push/pop)으로 문자열 뒤집기
// 실행: node ex7/7-5_reverse_stack.js javascript
function reverse(str) {
    let stack = [];
    for (let ch of str) {
        stack.push(ch);       // 한 글자씩 쌓기
    }
    let result = "";
    while (stack.length > 0) {
        result += stack.pop(); // 맨 위(마지막)부터 꺼내기
    }
    return result;
}

let str = process.argv[2] ?? "javascript";
console.log(`${str} -> ${reverse(str)}`);
