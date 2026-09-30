// 2-15 함수: 지역 변수, 외부 변수, 매개변수 기본값, return
let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName; // 외부 변수 접근
    console.log(message);
}
showMessage(); // Hello, John

function changeName() {
    userName = 'Bob'; // 외부 변수 수정
}
changeName();
console.log(userName); // Bob

function shadow() {
    let userName = 'Ann'; // 외부 변수를 가림
    console.log(userName); // Ann
}
shadow();
console.log(userName); // Bob

// 매개변수 기본값
function greet(from, text = "텍스트가 없습니다") {
    console.log(from + ": " + text);
}
greet("Ann"); // Ann: 텍스트가 없습니다

// return으로 값 반환 / 즉시 종료
function checkAge(age) {
    return age >= 18;
}
function showMovie(age) {
    if (!checkAge(age)) {
        console.log("접속 차단");
        return;
    }
    console.log("영화 상영");
}
showMovie(20); // 영화 상영
showMovie(15); // 접속 차단
