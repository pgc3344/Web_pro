// 객체 메서드와 this
// 실행: node ex6/6-3_object_methods.js 3 4
let calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read(Number(process.argv[2] ?? 1), Number(process.argv[3] ?? 2));
console.log(`${calculator.a} + ${calculator.b} = ${calculator.sum()}`);
console.log(`${calculator.a} * ${calculator.b} = ${calculator.mul()}`);
