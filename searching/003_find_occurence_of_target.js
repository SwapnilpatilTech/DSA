
// ===============================
// 3. First Occurrence of Target
// ===============================
function firstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // move left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Test
let arr2 = [1, 2, 2, 2, 3, 4];
console.log("First Occurrence:");
console.log("Array:", arr2);
console.log("First index of 2:", firstOccurrence(arr2, 2));
console.log("----------------------------------");