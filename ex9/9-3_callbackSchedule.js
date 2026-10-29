// 9-3. 콜백을 이용한 스케쥴링 (callbackSchedule.js)
// 비동기작업 콜백함수에서 다음 비동기작업 호출 → 순서 보장
// 실행: node ex9/9-3_callbackSchedule.js

airportProcess()
function airportProcess() {
    setTimeout(() => {
        checkIn();
        setTimeout(() => {
            security();
            setTimeout(() => {
                immigration();
                setTimeout(() => {
                    boarding();
                }, 2000);
            }, 1000);
        }, 2000);
    }, 3000);
}

function checkIn() {
    console.log("항공권 발급")
}
function security() {
    console.log("보안검색 완료")
}
function immigration() {
    console.log("출국심사 완료")
}
function boarding() {
    console.log("항공기 탑승")
}
