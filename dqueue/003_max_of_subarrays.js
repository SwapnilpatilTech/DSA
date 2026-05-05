function maxOfSubarrays(arr, k) {
  const deque = []; // stores indices
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // Remove indices that are out of this window
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Maintain monotonic decreasing order: remove elements smaller than current
    while (deque.length && arr[deque[deque.length - 1]] <= arr[i]) {
      deque.pop();
    }

    deque.push(i);

    // If the window is complete, the front of the deque is the maximum
    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }
  return result;
}

console.log("Max of subarrays (k=3):", maxOfSubarrays([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3, 3, 5, 5, 6, 7]