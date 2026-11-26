// 생성자 함수 2 — Account (입금·출금·잔고 조회)
// 실행: node ex6/6-5_constructor2.js 이름 금액
function Account(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    };
    this.withdraw = function (amount) {
        this.balance -= amount;
    };
    this.getBalance = function () {
        return this.balance;
    };
}

let account1 = new Account(process.argv[2] ?? "John", Number(process.argv[3] ?? 1000000));
console.log(account1.owner, account1.getBalance());

account1.withdraw(100000);
console.log("출금 100000 ->", account1.getBalance());

account1.deposit(500000);
console.log("입금 500000 ->", account1.getBalance());

// 생성자로 만든 계좌는 서로 독립적
let account2 = new Account("Jane", 50000);
account2.deposit(10000);
console.log(`${account2.owner} ${account2.getBalance()} / ${account1.owner} ${account1.getBalance()}`);
