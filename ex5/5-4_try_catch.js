// 2-14 try..catch 에러 핸들링
try {
    console.log('try 블록 시작');
    lalala; // 에러, 변수가 정의되지 않음
    console.log('try 블록 끝 (도달하지 않음)');
} catch (err) {
    console.log(err.name);    // ReferenceError
    console.log(err.message); // lalala is not defined
} finally {
    console.log('finally'); // 항상 실행
}

// finally는 return보다 먼저 실행됨
function func() {
    try {
        return 1;
    } finally {
        console.log('finally 실행');
    }
}
console.log(func()); // finally 실행 → 1

// 잘못된 JSON 처리
try {
    JSON.parse("{잘못된 json}");
} catch {
    console.log("JSON 파싱 실패");
}
