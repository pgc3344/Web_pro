// 9-6. promise 사용예 - worker 값에 따라 resolve / reject
// 실행: node ex9/9-6_promise_worker.js [true|false]  (기본값: false)

let worker = process.argv[2] === 'true';

let workPromise = new Promise(function (resolve, reject) {
    if (worker == true) {
        setTimeout(() => resolve("작업완료"), 3000);
    } else {
        reject("작업중지");
    }
});

workPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

console.log("다음 작업 실행");
