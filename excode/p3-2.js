// 문제 3-2. 윤년 판별  (실행: node p3-2.js 2024)
const year = Number(process.argv[2] ?? 2024);
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
if (isLeap) {
  console.log(`${year}년은 윤년입니다`);
} else {
  console.log(`${year}년은 평년입니다`);
}
