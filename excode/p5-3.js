// 문제 5-3. 화살표함수
const max = (n1, n2) => (n1 > n2 ? n1 : n2);

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

const pibo = (n) => {
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) [a, b] = [b, a + b];
  return n <= 2 ? 1 : b;
};

const calc = (n1, n2, operator) => {
  switch (operator) {
    case "+": return n1 + n2;
    case "-": return n1 - n2;
    case "*": return n1 * n2;
    case "/": return n1 / n2;
    default: return "잘못된 연산자";
  }
};

console.log(max(2, 5));        // 5
console.log(factorial(3));     // 6
console.log(pibo(6));          // 8
console.log(calc(3, 5, "+"));  // 8
console.log(calc(8, 2, "/"));  // 4
