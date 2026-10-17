// 문제 7-2. 문자열  (실행: node p7-2.js hello javascrip)
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function blankMiddle(word) {
  let mid = Math.floor(word.length / 2);
  return word.slice(0, mid) + " " + word.slice(mid + 1);
}

console.log(capitalize(process.argv[2] ?? "hello"));      // Hello
console.log(blankMiddle(process.argv[3] ?? "javascrip")); // java crip
