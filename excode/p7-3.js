// 문제 7-3. 배열 연산
let styles = ["Jazz", "Blues"];
console.log(styles.join(", "));
styles.push("Rock-n-Roll");
console.log(styles.join(", "));
styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles.join(", "));
console.log(styles.shift()); // Jazz
console.log(styles.join(", "));
styles.unshift("Rap", "Reggae");
console.log(styles.join(", "));
console.log(styles.pop());   // Rock-n-Roll
console.log(styles.join(", "));
