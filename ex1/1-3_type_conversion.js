// 2-7 형 변환
let flag = true;
console.log(typeof flag); // boolean
flag = String(flag);
console.log(typeof flag); // string

console.log("12" / "4");           // 3, 나누기는 알아서 숫자로 바꿔줌
console.log(Number("  2026  "));  // 2026
console.log(Number("99abc"));       // NaN
console.log(Number(true));         // 1
console.log(Number(false));        // 0
console.log(Number(undefined));    // NaN
console.log(Number(null));         // 0 (undefined랑 다름 주의)

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("js")); // true
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // "0"도 빈 문자열이 아니라 true
