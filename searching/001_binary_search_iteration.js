// ===============================
// 1. Binary Search (Iterative)
// ===============================
function binarySearchIterative(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Test
let arr1 = [1, 3, 5, 7, 9, 11];
console.log("Iterative Binary Search:");
console.log("Array:", arr1);
console.log("Target 7 found at index:", binarySearchIterative(arr1, 7));
console.log("----------------------------------");