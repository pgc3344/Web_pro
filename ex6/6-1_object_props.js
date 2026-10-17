// 객체 프로퍼티 추가·수정·삭제
let user = {};
console.log("빈 객체:", user);

user.name = "John";          // 추가
user.surname = "Smith";
console.log("추가 후:", user);

user.name = "Pete";          // 수정
console.log("수정 후:", user);

delete user.name;            // 삭제
console.log("삭제 후:", user);

console.log("name 있음?", "name" in user);       // false
console.log("surname 있음?", "surname" in user); // true
