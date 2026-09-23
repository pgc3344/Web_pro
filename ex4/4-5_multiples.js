// 문제 4-5. 배수 판별 (for / while)

// 숫자 끝소리에 받침이 있으면 "은", 없으면 "는"
function josa(n) {
  // 영, 일, 삼, 육, 칠, 팔 은 받침이 있음
  return [0, 1, 3, 6, 7, 8].includes(n % 10) ? "은" : "는";
}

function check(n) {
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
