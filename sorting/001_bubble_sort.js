// ===============================
// 1. Bubble Sort
// ===============================
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// Test
let arr1 = [5, 2, 9, 1, 5, 6];
console.log("Bubble Sort:");
console.log("Original:", arr1);
console.log("Sorted:", bubbleSort([...arr1]));
console.log("----------------------------------");