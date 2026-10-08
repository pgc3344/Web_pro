// 문제 4-1. switch -> if..else 변환
const browser = process.argv[2] ?? "Chrome";
if (browser === "Edge") {
  console.log("Edge를 사용하고 계시네요!");
} else if (browser === "Chrome" || browser === "Firefox" ||
           browser === "Safari" || browser === "Opera") {
  console.log("지원하는 브라우저 입니다.");
} else {
  console.log("good Luck!");
}
