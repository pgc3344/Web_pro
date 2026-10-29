// Asynchronous(비동기식) 처리 - 공항 출국 절차 (asyncProcessing.js)
// 대기 시간이 짧은 순서로 출력됨: 출국심사 → 탑승 → 보안검색 → 발권 (순서 보장 X)
// 실행: node nodejs2/asyncProcessing.js

checkIn();
security();
immigration();
boarding();
function checkIn() {
    setTimeout(() => { console.log("항공권 발권") }, 4000)
}
function security() {
    setTimeout(() => { console.log("보안검색 완료") }, 3000)
}
function immigration() {
    setTimeout(() => { console.log("출국심사 완료") }, 1000)
}
function boarding() {
    setTimeout(() => { console.log("항공기 탑승") }, 2000)
}
