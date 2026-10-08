// 문제 4-2. if -> switch 변환
const a = Number(process.argv[2] ?? 2);
switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
}
