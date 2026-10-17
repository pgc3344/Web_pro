// for...in으로 객체의 값 합계 구하기
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (let key in salaries) {
    console.log(`${key}: ${salaries[key]}`);
    sum += salaries[key];
}
console.log(`월급 합계: ${sum}`);
