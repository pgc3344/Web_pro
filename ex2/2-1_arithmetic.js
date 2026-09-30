// 문제 2-1. 산술연산자 연습
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  // 입력값은 문자열이므로 Number로 변환
  const x = Number(await rl.question("x 값: "));
  const y = Number(await rl.question("y 값: "));
  console.log(`x + y = ${x + y}`);
  console.log(`x - y = ${x - y}`);
  console.log(`x * y = ${x * y}`);
  console.log(`x / y = ${x / y}`);
  console.log(`x % y = ${x % y}`);
  console.log(`x ** y = ${x ** y}`);

  const r = Number(await rl.question("원의 반지름: "));
  console.log(`반지름 ${r}인 원의 넓이: ${(Math.PI * r ** 2).toFixed(2)}`);

  // 근의 공식 (d: 판별식)
  const a = Number(await rl.question("a 계수: "));
  const b = Number(await rl.question("b 계수: "));
  const c = Number(await rl.question("c 계수: "));
  const d = b ** 2 - 4 * a * c;
  if (a === 0) {
    console.log("a가 0이면 2차방정식이 아닙니다");
  } else if (d < 0) {
    console.log("실근이 없습니다 (판별식 < 0)");
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(`두 근: x1 = ${x1}, x2 = ${x2}`);
  }

  rl.close();
}

main();
