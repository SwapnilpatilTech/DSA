function minOfSubarrays(arr, k) {
  const deque = []; // stores indices
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Maintain monotonic increasing order: remove elements larger than current
    while (deque.length && arr[deque[deque.length - 1]] >= arr[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }
  return result;
}

console.log("Min of subarrays (k=3):", minOfSubarrays([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [-1, -3, -3, -3, 3, 3]