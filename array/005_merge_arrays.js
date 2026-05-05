function merge(arr1, arr2) {
  let i = 0;
  let j = 0;

  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Test
let arr1 = [1, 4, 7, 8, 10];
let arr2 = [2, 3, 9];
let result = merge(arr1, arr2);

console.log("Merged Arrays:");
console.log("Array 1:", result[0]);
console.log("Array 2:", result[1]);
console.log("----------------------------------");