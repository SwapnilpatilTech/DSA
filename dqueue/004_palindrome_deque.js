function isPalindrome(str) {
  const deque = [];
  // Normalize and push to deque
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let char of cleanStr) {
    deque.push(char);
  }

  while (deque.length > 1) {
    if (deque.shift() !== deque.pop()) return false;
  }
  return true;
}

console.log("Is 'Racecar' a palindrome?", isPalindrome("Racecar")); // true