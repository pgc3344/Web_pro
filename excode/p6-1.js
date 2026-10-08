// 문제 6-1. 객체 프로퍼티
let user = {};
console.log(user);
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);
