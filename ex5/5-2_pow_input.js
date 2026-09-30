// 2-15 함수 과제: pow(x, n) - 입력값 검사 포함
// 실행: node ex5/5-2_pow_input.js 3 2
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let base = Number(process.argv[2] ?? 3);
let exp = Number(process.argv[3] ?? 3);

if (exp < 1 || !Number.isInteger(exp)) {
    console.log(`${exp}은(는) 지원되지 않습니다. 자연수를 입력해 주세요.`);
} else {
    console.log(`pow(${base}, ${exp}) = ${pow(base, exp)}`);
}
