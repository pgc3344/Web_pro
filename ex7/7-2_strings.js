// 문제 7-2. 문자열
// 실행: node ex7/7-2_strings.js hello javascrip

// 1. 첫 글자를 대문자로 - slice()
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

// 2. 가운데 글자를 공백으로 (글자 수는 홀수라고 가정)
function blankMiddle(word) {
    let mid = Math.floor(word.length / 2);
    return word.slice(0, mid) + " " + word.slice(mid + 1);
}

let word1 = process.argv[2] ?? "hello";
let word2 = process.argv[3] ?? "javascrip";

console.log(`${word1} -> ${capitalize(word1)}`);
if (word2.length % 2 === 0) {
    console.log(`${word2}은(는) 글자 수가 짝수입니다. 홀수 길이 단어를 입력해 주세요.`);
} else {
    console.log(`'${word2}' -> '${blankMiddle(word2)}'`);
}
