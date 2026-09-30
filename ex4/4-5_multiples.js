// 문제 4-5. 배수 판별 (for / while)

// 숫자 뒤 조사(은/는) 선택
function josa(n) {
  // 받침 있는 끝자리: 0 1 3 6 7 8
  return [0, 1, 3, 6, 7, 8].includes(n % 10) ? "은" : "는";
}

function check(n) {
  // 3과 5 둘 다인 경우 먼저 체크
  if (n % 3 === 0 && n % 5 === 0) {
    console.log(`${n}${josa(n)} 3과 5의 배수입니다`);
  } else if (n % 3 === 0) {
    console.log(`${n}${josa(n)} 3의 배수입니다`);
  } else if (n % 5 === 0) {
    console.log(`${n}${josa(n)} 5의 배수입니다`);
  }
}

console.log("=== for 루프 ===");
for (let n = 1; n <= 100; n++) {
  check(n);
}

console.log("\n=== while 루프 ===");
let n = 1;
while (n <= 100) {
  check(n);
  n++;
}
