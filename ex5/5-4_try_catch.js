// 2-14 try..catch 에러 핸들링
try {
    console.log('try 블록 시작');
    undefinedVar; // 에러, 변수가 정의되지 않음
    console.log('try 블록 끝 (도달하지 않음)');
} catch (error) {
    console.log(error.name);    // ReferenceError
    console.log(error.message); // undefinedVar is not defined
} finally {
    console.log('finally'); // 항상 실행
}

// finally는 return보다 먼저 실행됨
function getScore() {
    try {
        return 100;
    } finally {
        console.log('finally 실행');
    }
}
console.log(getScore()); // finally 실행 → 100

// 잘못된 JSON 처리
try {
    JSON.parse("{잘못된 json}");
} catch {
    console.log("JSON 파싱 실패");
}
