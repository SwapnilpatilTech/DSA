
// ===============================
// 4. Last Occurrence of Target
// ===============================
function lastOccurrence(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // move right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Test
console.log("Last Occurrence:");
console.log("Last index of 2:", lastOccurrence(arr2, 2));
console.log("----------------------------------");