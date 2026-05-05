// ===============================
// 1. Second Largest Element
// ===============================
function secondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Test
let arr1 = [10, 5, 20, 8, 20];
console.log("Array:", arr1);
console.log("Second Largest:", secondLargest(arr1));
console.log("----------------------------------");