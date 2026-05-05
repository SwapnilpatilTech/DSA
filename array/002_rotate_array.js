
// ===============================
// 2. Rotate Array Right by k
// ===============================
function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;

  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  return arr;
}

// Test
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Original Array:", arr2);
console.log("Rotated by", k, ":", rotateArray([...arr2], k)); // copy to preserve original
console.log("----------------------------------");