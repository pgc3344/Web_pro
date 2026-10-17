// 문제 7-1. 숫자 (원시값의 메서드: toString, parseInt, isNaN)
// 실행: node ex7/7-1_numbers.js 2025 "25misterm10.04 Mon"

// 1. 각 자리 숫자의 합 - toString()으로 문자열로 바꾼 뒤 한 글자씩 parseInt
function digitSum(n) {
    let str = n.toString();
    let sum = 0;
    for (let ch of str) {
        sum += parseInt(ch);
    }
    return sum;
}

// 2. 문자열 안의 숫자 합 - 숫자가 아닌 글자는 isNaN으로 거름
//    (예시 결과 12에 맞춰 숫자 한 글자씩 더함: 2+5+1+0+0+4)
function sumInString(str) {
    let sum = 0;
    for (let ch of str) {
        if (!isNaN(parseInt(ch))) {
            sum += parseInt(ch);
        }
    }
    return sum;
}

// 3. 2진수 → 16진수 문자열 - toString(16)
function binToHex(bin) {
    return "0x" + bin.toString(16).toUpperCase();
}

let n = Number(process.argv[2] ?? 2025);
let text = process.argv[3] ?? "25misterm10.04 Mon";

console.log(`${n} -> ${digitSum(n)}`);
console.log(`'${text}' -> ${sumInString(text)}`);
console.log(`0b11111110 -> '${binToHex(0b11111110)}'`);
