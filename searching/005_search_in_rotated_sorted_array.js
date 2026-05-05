
// ===============================
// 5. Search in Rotated Sorted Array
// ===============================
function searchRotated(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        // Left half sorted
        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half sorted
        else {
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

// Test
let arr3 = [4, 5, 6, 7, 0, 1, 2];
console.log("Search in Rotated Sorted Array:");
console.log("Array:", arr3);
console.log("Target 0 found at index:", searchRotated(arr3, 0));
console.log("----------------------------------");