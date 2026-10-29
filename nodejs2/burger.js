// 연습문제 1 - getBurger 비동기 코드를 1) Promise 2) async/await로 구현
// 실행: node nodejs2/burger.js [true|false]  (shopOpen, 기본값: true)

let shopOpen = process.argv[2] !== 'false';

// 원본 (콜백/setTimeout)
// let getBurger = () => {
//     setTimeout(() => {
//         if (shopOpen) console.log('🍔');
//         else console.log('😵');
//     }, 3000);
// }

// 1) Promise - 3초 후 가게가 열려 있으면 resolve, 닫혀 있으면 reject
let getBurger = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shopOpen) {
            resolve('🍔');
        } else {
            reject('😵');
        }
    }, 3000);
});

getBurger()
    .then((burger) => console.log('Promise:', burger))
    .catch((error) => console.log('Promise:', error));

// 2) async/await - reject는 try..catch로 처리
async function orderBurger() {
    try {
        let burger = await getBurger();
        console.log('async/await:', burger);
    } catch (error) {
        console.log('async/await:', error);
    }
}

orderBurger();
console.log('waiting for a burger...');
