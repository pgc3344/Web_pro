// 문제 4-4. 구구단 출력
const readline = require("readline/promises");

function printDan(dan) {
  console.log(`구구단 ${dan}단`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const dan = parseInt(await rl.question("1-9 사이의 숫자: "), 10);
  rl.close();

  if (dan >= 1 && dan <= 9) {
    printDan(dan);
  } else {
    console.log("1에서 9 사이의 숫자를 입력하세요");
  }

  // 추가: 1단부터 9단까지 모두 출력
  console.log("\n=== 전체 구구단 ===");
  for (let d = 1; d <= 9; d++) {
    printDan(d);
  }
}

main();
