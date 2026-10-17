// 문제 7-4. 값이 일치하는 요소를 제거한 새 배열 반환
// 실행: node ex7/7-4_remove_value.js apple
function removeValue(arr, value) {
    let result = [];
    for (let item of arr) {
        if (item !== value) {
            result.push(item);
        }
    }
    return result;
}

let fruits = ["banana", "apple", "melon"];
let target = process.argv[2] ?? "apple";

console.log("원본:", fruits);
console.log(`'${target}' 제거:`, removeValue(fruits, target));
console.log("원본은 그대로:", fruits);
