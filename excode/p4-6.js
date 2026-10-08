// 문제 4-6. 소수 찾기 (1~100)
function josa(n) {
  const last = n % 10;
  return [0, 1, 3, 6, 7, 8].includes(last) ? "은" : "는";
}

for (let n = 2; n <= 100; n++) {
  let isPrime = true;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(`${n}${josa(n)} 소수입니다`);
}
