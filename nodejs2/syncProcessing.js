// Synchronous(동기식) 처리 - 공항 출국 절차 (syncProcessing.js)
// delay_ms는 while 루프로 CPU를 붙잡아 다음 작업을 막음 → 4+2+1+3 = 10초
// 실행: node nodejs2/syncProcessing.js

checkIn();
security();
immigration();
boarding();

function checkIn() {
    delay_ms(4000);
    console.log("항공권 발권");
}
function security() {
    delay_ms(2000);
    console.log("보안검색 통과");
}
function immigration() {
    delay_ms(1000);
    console.log("출국심사 완료");
}
function boarding() {
    delay_ms(3000);
    console.log("항공기 탑승");
}

function delay_ms(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
