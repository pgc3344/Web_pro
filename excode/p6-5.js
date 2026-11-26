// 문제 6-5. 생성자 함수 2 — Account
function Account(owner, balance) {
  this.owner = owner;     // 계좌주인 이름
  this.balance = balance; // 계좌잔고

  this.deposit = function (amount) {
    this.balance += amount; // 계좌잔고에 amount 만큼 추가
  };
  this.withdraw = function (amount) {
    this.balance -= amount; // 계좌잔고에서 amount 만큼 차감
  };
  this.getBalance = function () {
    return this.balance;    // 현재 계좌잔고 반환
  };
}

let account1 = new Account("John", 1000000);

console.log(account1.owner);        // John
console.log(account1.getBalance()); // 1000000

account1.withdraw(100000);
console.log(account1.getBalance()); // 900000

account1.deposit(500000);           // 슬라이드의 account.deposit 은 account1 의 오타
console.log(account1.getBalance()); // 1400000
