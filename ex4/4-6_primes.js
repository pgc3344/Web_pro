// 문제 4-6. 소수 찾기 (1 ~ 100)

// 4-5에서 쓴 거 그대로 가져옴
function josa(n) {
  return [0, 1, 3, 6, 7, 8].includes(n % 10) ? "은" : "는";
}

function isPrime(n) {
  if (n < 2) return false;
  // 제곱근까지만 확인
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let n = 1; n <= 100; n++) {
  if (isPrime(n)) {
    console.log(`${n}${josa(n)} 소수입니다`);
  }
}
