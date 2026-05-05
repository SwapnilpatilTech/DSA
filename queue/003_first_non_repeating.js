function firstNonRepeating(stream) {
  const charCount = new Map();
  const queue = [];
  let result = "";

  for (let char of stream) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
    queue.push(char);

    // Remove characters from front if they are repeated
    while (queue.length > 0 && charCount.get(queue[0]) > 1) {
      queue.shift();
    }

    result += queue.length > 0 ? queue[0] : "#";
  }

  return result;
}

console.log("Stream: aabcbc -> Result:", firstNonRepeating("aabcbc")); 
// Output: "aa#bb#"