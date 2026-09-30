// 2-15 함수 과제: min(a, b), pow(x, n)
function min(first, second) {
    if (first < second) {
        return first;
    }
    return second;
}

console.log(min(7, 3));   // 3
console.log(min(-4, 1));  // -4

function pow(base, exponent) {
    let answer = 1;
    for (let count = 0; count < exponent; count++) {
        answer *= base;
    }
    return answer;
}

console.log(pow(3, 4));   // 81
console.log(pow(5, 2));   // 25
