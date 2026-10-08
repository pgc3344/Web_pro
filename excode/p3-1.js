// 문제 3-1. 홀수/짝수 판별  (실행: node p3-1.js 7)
const n = Number(process.argv[2] ?? 7);
if (n % 2 === 0) {
  console.log(`${n}은 짝수입니다`);
} else {
  console.log(`${n}은 홀수입니다`);
}
