// 문제 7-3. 배열 연산 차례로 수행
let styles = ["Jazz", "Blues"];
console.log(styles.join(", "));

styles.push("Rock-n-Roll");                       // 끝에 추가
console.log(styles.join(", "));

styles[Math.floor(styles.length / 2)] = "Classics"; // 정 중앙 요소 변경
console.log(styles.join(", "));

console.log("꺼낸 첫 요소:", styles.shift());    // 첫 요소 꺼내기
console.log(styles.join(", "));

styles.unshift("Rap", "Reggae");                  // 앞에 추가
console.log(styles.join(", "));

console.log("꺼낸 마지막 요소:", styles.pop());  // 마지막 요소 꺼내기
console.log(styles.join(", "));
