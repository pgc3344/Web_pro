// 2-15 함수 - 변수 범위랑 return
let nickname = 'Gichan';

function printGreeting() {
    let greeting = 'Hello, ' + nickname; // 외부 변수 사용
    console.log(greeting);
}
printGreeting(); // Hello, Gichan

function changeName() {
    nickname = 'Minsu'; // 외부 변수 변경
}
changeName();
console.log(nickname); // Minsu

function shadow() {
    let nickname = 'Jiwoo'; // 같은 이름의 지역 변수
    console.log(nickname); // Jiwoo
}
shadow();
console.log(nickname); // Minsu

// 기본값 매개변수
function sendNote(sender, note = "내용 없음") {
    console.log(sender + ": " + note);
}
sendNote("Jiwoo"); // Jiwoo: 내용 없음

function isAdult(userAge) {
    return userAge >= 19;
}
function enterCinema(userAge) {
    if (!isAdult(userAge)) {
        console.log("입장 불가");
        return; // 함수 종료
    }
    console.log("입장 완료");
}
enterCinema(25); // 입장 완료
enterCinema(17); // 입장 불가
