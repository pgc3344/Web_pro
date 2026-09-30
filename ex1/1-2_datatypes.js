// 2-5 자료형 과제: 문자열 따옴표
let player = "Gichan";
console.log(`hello ${1}`);      // hello 1
console.log(`hello ${"player"}`); // hello name
console.log(`hello ${player}`);   // hello Gichan

// typeof로 자료형 확인
console.log(typeof 0);         // number
console.log(typeof 10n);       // bigint
console.log(typeof "foo");     // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (언어 자체의 오류)
console.log(typeof Symbol("id")); // symbol
