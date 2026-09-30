// 2-7 형 변환
// 문자형으로 변환
let value = true;
console.log(typeof value); // boolean
value = String(value);
console.log(typeof value); // string

// 숫자형으로 변환
console.log("6" / "2");            // 3
console.log(Number("   123   "));  // 123
console.log(Number("123z"));       // NaN
console.log(Number(true));         // 1
console.log(Number(false));        // 0
console.log(Number(undefined));    // NaN
console.log(Number(null));         // 0

// 불린형으로 변환
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true (비어있지 않은 문자열)
