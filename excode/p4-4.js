// 문제 4-4. 구구단 출력  (실행: node p4-4.js 7)
const dan = Number(process.argv[2] ?? 7);
if (dan >= 1 && dan <= 9) {
  console.log(`구구단 ${dan}단`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
} else {
  console.log("1-9 사이의 숫자를 입력하세요");
}

// 추가: 1단~9단 전체 출력
console.log("\n=== 1단 ~ 9단 ===");
for (let d = 1; d <= 9; d++) {
  console.log(`구구단 ${d}단`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${d} x ${i} = ${d * i}`);
  }
}
