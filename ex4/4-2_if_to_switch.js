// 문제 4-2. if 문을 switch 문 하나로 변환
const a = 2;

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
