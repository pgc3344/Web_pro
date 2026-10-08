// 문제 6-2. 월급 합계 (for...in)
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(`월급 합계: ${sum}`); // 390
