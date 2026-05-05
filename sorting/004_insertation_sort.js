
// function insertationSort(nums, n) {
//     nums.push(n);

// for(let i = nums.length - 1; i > 0; i--) {
//     if(nums[i] > nums[i - 1]) {
//         [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
//     }
// }

//     return nums
// }

// let nums = [10, 9, 8, 7, 5, 4, 3, 2, 1];
// let n = 6;
// console.log("Insertation Sort: ", insertationSort(nums, n));


function insertationSort(nums) {

    for (let i = 1; i < nums.length; i++) {
        for (let j = nums.length - 1; j > 0; j--) {
            if (nums[j] > nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
            }
        }
    }

    return nums;
}

let nums = [10, 24, 9, 4, 55, 17];
console.log("Insertation Sort: ", insertationSort(nums));