// 문제 2-2. 비교연산자 (주석은 예상 결과)
console.log(10 > 5);            // true
console.log(10 === "10");       // false - 타입이 다름
console.log(10 == "10");        // true, ==는 타입 변환 후 비교
console.log(5 >= 5);            // true
console.log(3 != "3");          // false
console.log(3 !== "3");         // true
console.log(10 > 5 && 3 < 2);   // false
console.log(10 > 5 || 3 < 2);   // true

console.log("apple" > "banana"); // false, 사전순 비교
console.log(5 > 3 === true);     // true  - (5 > 3) === true

{
  const a = 10;
  const b = "10";
  console.log(a == b && a !== b); // true
}
{
  const x = 20;
  console.log(x >= 10 && x <= 20); // true
}
