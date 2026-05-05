
// ===============================
// 2. Binary Search (Recursive)
// ===============================
function binarySearchRecursive(arr, left, right, target) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target)
        return binarySearchRecursive(arr, mid + 1, right, target);
    else
        return binarySearchRecursive(arr, left, mid - 1, target);
}

// Test
console.log("Recursive Binary Search:");
console.log("Target 9 found at index:", binarySearchRecursive(arr1, 0, arr1.length - 1, 9));
console.log("----------------------------------");