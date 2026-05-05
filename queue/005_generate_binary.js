function generateBinary(n) {
  const result = [];
  const queue = ["1"];

  for (let i = 0; i < n; i++) {
    const current = queue.shift();
    result.push(current);
    
    queue.push(current + "0");
    queue.push(current + "1");
  }

  return result;
}

console.log("Binary numbers up to 5:", generateBinary(5));