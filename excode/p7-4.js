// 문제 7-4. 값이 일치하는 요소 제거  (실행: node p7-4.js apple)
function removeValue(arr, value) {
  return arr.filter((item) => item !== value);
}

console.log(removeValue(["banana", "apple", "melon"], process.argv[2] ?? "apple")); // [ 'banana', 'melon' ]
