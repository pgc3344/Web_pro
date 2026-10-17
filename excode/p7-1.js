// 문제 7-1. 숫자  (실행: node p7-1.js 2025 "25misterm10.04 Mon")
function digitSum(n) {
  let sum = 0;
  for (let ch of n.toString()) sum += parseInt(ch);
  return sum;
}

// 예시 결과(12)에 맞춰 문자열 속 숫자를 한 글자씩 더함
function sumInString(str) {
  let sum = 0;
  for (let ch of str) {
    if (!isNaN(parseInt(ch))) sum += parseInt(ch);
  }
  return sum;
}

function binToHex(bin) {
  return "0x" + bin.toString(16).toUpperCase();
}

console.log(digitSum(Number(process.argv[2] ?? 2025)));         // 9
console.log(sumInString(process.argv[3] ?? "25misterm10.04 Mon")); // 12
console.log(binToHex(0b11111110));                                // 0xFE
