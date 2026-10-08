// 문제 2-1. 산술연산자 연습  (실행: node p2-1.js x y r a b c)
const args = process.argv.slice(2).map(Number);

// 1) 수식 계산
console.log(15 - 5 * (7 + 2 * 3) ** 2);
console.log(5 * (2 + (5 - 3) / 4) * 128);
console.log(((3 ** 3 - 2) % 5 + 2) ** 2);

// 2) x, y 입력
const x = args[0] || 2;
const y = args[1] || 1;
console.log(`x=${x}, y=${y}`);
console.log(x ** (2 * y) * (x + 5) * Math.log2(x));
console.log(x * Math.sqrt(2 - 2 * Math.sin(y)));

// 3) 원의 넓이
const r = args[2] || 5;
console.log(`반지름 ${r}인 원의 넓이: ${Math.PI * r ** 2}`);

// 4) 2차방정식 ax^2 + bx + c = 0 의 두 근
const a = args[3] || 1, b = args[4] || -3, c = args[5] || 2;
const D = b ** 2 - 4 * a * c;
if (D >= 0) {
  const r1 = (-b + Math.sqrt(D)) / (2 * a);
  const r2 = (-b - Math.sqrt(D)) / (2 * a);
  console.log(`${a}x^2 + ${b}x + ${c} = 0 의 두 근: ${r1}, ${r2}`);
} else {
  const re = -b / (2 * a), im = Math.sqrt(-D) / (2 * a);
  console.log(`허근: ${re} + ${im}i, ${re} - ${im}i`);
}
