// 모듈 export/require 연습 — circle 모듈 (moduleTest2.js 에서 사용)
let circle = {};
let radius = 0;

circle.PI = 3.141592;
circle.setRadius = function(r){
  radius = r; // 반지름 지정
}
circle.getArea = function(){
  return circle.PI * radius * radius; // 면적
}

module.exports = circle;
