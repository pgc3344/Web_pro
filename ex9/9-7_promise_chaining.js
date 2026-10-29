// 9-7. 프로미스 체이닝을 이용한 비동기 스케쥴링 - 공항출국 예
// then()에서 새로운 프로미스를 반환해 순차 실행
// 실행: node ex9/9-7_promise_chaining.js

const checkIn = () => new Promise(function (resolve, reject) {
    setTimeout(() => { resolve("항공권발급"); }, 4000);
})

const security = () => new Promise(function (resolve, reject) {
    setTimeout(() => { resolve("보안검색완료"); }, 4000);
})

checkIn()
    .then((result) => { console.log(result); return security(); })
    .then((result) => { console.log(result); })

console.log('여행 준비 중...');
