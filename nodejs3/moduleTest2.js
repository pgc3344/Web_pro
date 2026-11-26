// 모듈 export/require 연습 — circle.js 모듈 가져와서 사용
const c1 = require('./circle')
console.log(c1.PI)           // 3.141592
c1.setRadius(20)             // 반지름 지정
console.log(c1.getArea())    // 면적 출력
