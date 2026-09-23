// 문제 3-1. 홀수/짝수 판별
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const n = parseInt(await rl.question("정수 n: "), 10);
  rl.close();

  if (n % 2 === 0) {
    console.log(`${n}은 짝수입니다`);
  } else {
    console.log(`${n}은 홀수입니다`);
  }
}

main();
