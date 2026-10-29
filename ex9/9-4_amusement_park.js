// 9-4. 비동기 스케쥴링 연습
// 바이킹(5초) → 티익스프레스(7초) → 허리케인(3초) 순서로 비동기 실행
// 콜백 / 프로미스 / async·await 세 가지 방식으로 구현
// 실행: node ex9/9-4_amusement_park.js [callback|promise|async]  (기본값: callback)

// 1) 콜백 방식 - 각 함수가 끝나면 다음 작업(callback)을 호출
function viking(callback) {
    setTimeout(() => {
        console.log('Viking is fantastic!');
        callback();
    }, 5000);
}
function t_express(callback) {
    setTimeout(() => {
        console.log('T-express is frightening!');
        callback();
    }, 7000);
}
function hurricane(callback) {
    setTimeout(() => {
        console.log('Hurricane is dizzy!');
        callback();
    }, 3000);
}

function rideWithCallback() {
    viking(() => {
        t_express(() => {
            hurricane(() => {
                console.log('콜백: 놀이기구 끝');
            });
        });
    });
}

// 2) 프로미스 방식 - ms 후 msg를 출력하고 resolve
const ride = (msg, ms) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(msg);
        resolve();
    }, ms);
});

const vikingP = () => ride('Viking is fantastic!', 5000);
const t_expressP = () => ride('T-express is frightening!', 7000);
const hurricaneP = () => ride('Hurricane is dizzy!', 3000);

function rideWithPromise() {
    vikingP()
        .then(() => t_expressP())
        .then(() => hurricaneP())
        .then(() => console.log('프로미스: 놀이기구 끝'));
}

// 3) async/await 방식
async function rideWithAsync() {
    await vikingP();
    await t_expressP();
    await hurricaneP();
    console.log('async/await: 놀이기구 끝');
}

let mode = process.argv[2] || 'callback';
switch (mode) {
    case 'promise':
        rideWithPromise();
        break;
    case 'async':
        rideWithAsync();
        break;
    default:
        rideWithCallback();
}
console.log(`놀이공원 입장 (${mode})...`);
