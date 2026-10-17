// 생성자 함수와 new
// 실행: node ex6/6-4_constructor.js 3 4
function Calculator() {
    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calc1 = new Calculator();
calc1.read(Number(process.argv[2] ?? 1), Number(process.argv[3] ?? 2));
console.log("Sum=" + calc1.sum());
console.log("Mul=" + calc1.mul());

// 생성자로 만든 객체는 서로 독립적
let calc2 = new Calculator();
calc2.read(10, 20);
console.log("calc2 Sum=" + calc2.sum(), "/ calc1 Sum=" + calc1.sum());
