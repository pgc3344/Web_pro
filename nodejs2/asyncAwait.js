// async/await를 이용한 비동기 스케쥴링 - 공항 출국 프로세스
// 실행: node nodejs2/asyncAwait.js

const checkIn = () => new Promise(function (resolve, reject) {
    setTimeout(() => { resolve("항공권발급"); }, 4000);
})
const security = () => new Promise(function (resolve, reject) {
    setTimeout(() => { resolve("보안검색완료"); }, 3000);
})
async function airportProcess() {
    let result1 = await checkIn();
    console.log(result1);
    let result2 = await security();
    console.log(result2);
}
airportProcess();
console.log('여행 준비 중...');
