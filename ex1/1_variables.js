// 문제1. 변수와 상수
const SHIP_NAME = "Hope";
const SPEED_MPH = 17500;
const MILES_PER_KM = 0.621;
const MARS_DISTANCE_KM = 225000000;
const MOON_DISTANCE_KM = 384400;
const SHIP_WEIGHT_KG = 5500;
const FUEL_WEIGHT_KG = 1100;

// 속도가 mph라서 km를 마일로 먼저 바꿈
const hoursToMars = (MARS_DISTANCE_KM * MILES_PER_KM) / SPEED_MPH;
console.log(`우주선 ${SHIP_NAME}는 화성까지 ${hoursToMars.toFixed(2)}시간 걸립니다`);

const hoursToMoon = (MOON_DISTANCE_KM * MILES_PER_KM) / SPEED_MPH;
console.log(`우주선 ${SHIP_NAME}는 달까지 ${hoursToMoon.toFixed(2)}시간 걸립니다`);

const launchWeight = SHIP_WEIGHT_KG + FUEL_WEIGHT_KG;
console.log(`우주선 ${SHIP_NAME}의 발사무게는 ${launchWeight}kg 입니다`);
