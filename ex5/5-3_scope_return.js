// 2-15 함수: 지역 변수, 외부 변수, 매개변수 기본값, return
let nickname = 'Gichan';

function printGreeting() {
    let greeting = 'Hello, ' + nickname; // 외부 변수 접근
    console.log(greeting);
}
printGreeting(); // Hello, Gichan

function changeName() {
    nickname = 'Minsu'; // 외부 변수 수정
}
changeName();
console.log(nickname); // Minsu

function shadow() {
    let nickname = 'Jiwoo'; // 외부 변수를 가림
    console.log(nickname); // Jiwoo
}
shadow();
console.log(nickname); // Minsu

// 매개변수 기본값
function sendNote(sender, note = "내용 없음") {
    console.log(sender + ": " + note);
}
sendNote("Jiwoo"); // Jiwoo: 내용 없음

// return으로 값 반환 / 즉시 종료
function isAdult(userAge) {
    return userAge >= 19;
}
function enterCinema(userAge) {
    if (!isAdult(userAge)) {
        console.log("입장 불가");
        return;
    }
    console.log("입장 완료");
}
enterCinema(25); // 입장 완료
enterCinema(17); // 입장 불가
