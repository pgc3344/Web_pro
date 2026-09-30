// 2-14 try..catch 에러 핸들링
try {
    console.log('try 블록 시작');
    undefinedVar; // 정의되지 않은 변수
    console.log('try 블록 끝 (도달하지 않음)');
} catch (error) {
    console.log(error.name);    // ReferenceError
    console.log(error.message); // undefinedVar is not defined
} finally {
    console.log('finally'); // 항상 실행
}

// return 있어도 finally가 먼저 실행됨
function getScore() {
    try {
        return 100;
    } finally {
        console.log('finally 실행');
    }
}
console.log(getScore()); // finally 실행 → 100

// 에러 객체를 안 쓰면 catch만 작성
try {
    JSON.parse("{잘못된 json}");
} catch {
    console.log("JSON 파싱 실패");
}
