// 문제 3-2. 윤년 판별
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const year = parseInt(await rl.question("년도: "), 10);
  rl.close();

  // 4로 나누어 떨어지면 윤년, 100으로 나누어 떨어지면 평년, 400으로 나누어 떨어지면 윤년
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  console.log(`${year}년은 ${isLeap ? "윤년" : "평년"}입니다`);
}

main();
