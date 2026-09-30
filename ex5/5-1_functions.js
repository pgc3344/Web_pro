function min(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(5, 2));

function pow(x, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * x;
    }
    return result;
}
console.log(pow(2, 8));
