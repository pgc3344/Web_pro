// 문제 6-3. 객체 메서드
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

calculator.read(1, 2);
console.log(calculator.sum()); // 3
console.log(calculator.mul()); // 2
