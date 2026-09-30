// 2-5 자료형
// ${}는 백틱 문자열에서만 동작
let player = "Gichan";
console.log(`hello ${1}`);      // hello 1
console.log(`hello ${"player"}`); // hello player
console.log(`hello ${player}`);   // hello Gichan

console.log(typeof 0);         // number
console.log(typeof 10n);       // bigint
console.log(typeof "foo");     // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object
console.log(typeof Symbol("id")); // symbol
