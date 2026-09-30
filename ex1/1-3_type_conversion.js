// 2-7 형 변환
// 문자형으로 변환
let flag = true;
console.log(typeof flag); // boolean
flag = String(flag);
console.log(typeof flag); // string

// 숫자형으로 변환
console.log("12" / "4");           // 3
console.log(Number("  2026  "));  // 2026
console.log(Number("99abc"));       // NaN
console.log(Number(true));         // 1
console.log(Number(false));        // 0
console.log(Number(undefined));    // NaN
console.log(Number(null));         // 0

// 불린형으로 변환
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("js")); // true
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true (비어있지 않은 문자열)
