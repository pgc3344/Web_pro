// 문제1. 변수와 상수
const NAME = "Hope";
const SPEED_MPH = 17500;
const MILES_PER_KM = 0.621;
const DIST_MARS_KM = 225000000;
const DIST_MOON_KM = 384400;
const SHIP_WEIGHT = 5500;
const FUEL_WEIGHT = 1100;

const speedKmh = SPEED_MPH / MILES_PER_KM;
const timeToMars = DIST_MARS_KM / speedKmh;
const timeToMoon = DIST_MOON_KM / speedKmh;
const launchWeight = SHIP_WEIGHT + FUEL_WEIGHT;

console.log(`우주선 ${NAME}는 화성까지 ${timeToMars.toFixed(2)}시간 걸립니다`);
console.log(`우주선 ${NAME}는 달까지 ${timeToMoon.toFixed(2)}시간 걸립니다`);
console.log(`우주선 ${NAME}의 발사무게는 ${launchWeight}kg 입니다`);
