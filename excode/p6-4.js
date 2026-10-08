// 문제 6-4. 생성자 함수
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

let calculator = new Calculator();
calculator.read(1, 2);
console.log("Sum=" + calculator.sum()); // Sum=3
console.log("Mul=" + calculator.mul()); // Mul=2
