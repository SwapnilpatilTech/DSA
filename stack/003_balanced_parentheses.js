function isBalanced(str) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (let ch of str) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else if (map[ch]) {
      if (stack.pop() !== map[ch]) return false;
    }
  }

  return stack.length === 0;
}