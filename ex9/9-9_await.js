// 9-9. 자바스크립트 await - 프로미스가 처리될 때까지 대기
// reject 결과는 try..catch의 catch 블록으로 처리
// 실행: node ex9/9-9_await.js

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });
    let result = await promise;  // 프로미스가 처리될 때까지 대기
    console.log(result);  // "완료!"
}

async function g() {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => reject("실패!"), 1500)
        });
    } catch (error) {
        console.log("catch:", error);
    }
}

f();
g();
