// 2-15 함수 - 수업시간에 한 거
function min(first, second) {
    if (first < second) {
        return first;
    }
    return second; // 같은 경우 포함
}

console.log(min(7, 3));   // 3
console.log(min(-4, 1));  // -4

function pow(base, exponent) {
    let answer = 1; // 0으로 하면 계속 0
    for (let count = 0; count < exponent; count++) {
        answer *= base;
    }
    return answer;
}

console.log(pow(3, 4));   // 81
console.log(pow(5, 2));   // 25
