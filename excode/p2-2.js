// 문제 2-2. 비교연산자 연습 (주석: 예측 결과)
console.log(10 > 5);            // true
console.log(10 === "10");       // false (타입 다름)
console.log(10 == "10");        // true (형변환)
console.log(5 >= 5);            // true
console.log(3 != "3");          // false
console.log(3 !== "3");         // true
console.log(10 > 5 && 3 < 2);   // false
console.log(10 > 5 || 3 < 2);   // true
console.log("apple" > "banana");// false (사전순 비교)
console.log(5 > 3 === true);    // true
{
  const a = 10;
  const b = "10";
  console.log(a == b && a !== b); // true
}
{
  const x = 20;
  console.log(x >= 10 && x <= 20); // true
}
