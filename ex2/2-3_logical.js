// 문제 2-3. 논리연산 (주석은 예상 결과)
console.log(true || false && false);    // true, &&가 먼저 계산됨
console.log((true || false) && false);  // false
console.log(!(true || false) && true);  // false
console.log("" || "JavaScript");        // "JavaScript"

{
  const a = 0;
  const b = 10;
  console.log((a || b) && 20);          // 20
}
{
  const a = "";
  const b = "Hello";
  const c = "World";
  console.log(a || b && c);             // "World"
}
{
  const x = 10;
  const y = 20;
  const z = 30;
  console.log(x && y && z);             // 30 - 모두 truthy면 마지막 값
}
{
  const x = 0;
  const y = 10;
  const z = 20;
  console.log(x || y || z);             // 10 - 첫 번째 truthy 값
}
{
  const x = 10;
  const y = 20;
  console.log(!(x > 5 && y < 10) || (x === 10 && y === 20)); // true
}
{
  const x = 10;
  console.log(x > 5 && 0 || x < 5);     // (true && 0) || false → false
}
