// 문제 4-6. 소수 찾기 (1 ~ 100)

// 숫자 끝소리에 받침이 있으면 "은", 없으면 "는"
function josa(n) {
  return [0, 1, 3, 6, 7, 8].includes(n % 10) ? "은" : "는";
}

function isPrime(n) {
  if (n < 2) return false;
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
