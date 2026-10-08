// 문제 2-3. 논리연산 연습 (주석: 예측 결과)
console.log(true || false && false);     // true (&& 우선)
console.log((true || false) && false);   // false
console.log(!(true || false) && true);   // false
console.log("" || "JavaScript");         // "JavaScript"
{
  const a = 0, b = 10;
  console.log((a || b) && 20);           // 20
}
{
  const a = "", b = "Hello", c = "World";
  console.log(a || b && c);              // "World"
}
{
  const x = 10, y = 20, z = 30;
  console.log(x && y && z);              // 30
}
{
  const x = 0, y = 10, z = 20;
  console.log(x || y || z);              // 10
}
{
  const x = 10, y = 20;
  console.log(!(x > 5 && y < 10) || (x === 10 && y === 20)); // true
}
{
  const x = 10;
  console.log(x > 5 && 0 || x < 5);      // false
}
