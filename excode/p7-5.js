// 문제 7-5. 스택으로 문자열 뒤집기  (실행: node p7-5.js javascript)
function reverse(str) {
  let stack = [];
  for (let ch of str) stack.push(ch);
  let result = "";
  while (stack.length > 0) result += stack.pop();
  return result;
}

console.log(reverse(process.argv[2] ?? "javascript")); // tpircsavaj
