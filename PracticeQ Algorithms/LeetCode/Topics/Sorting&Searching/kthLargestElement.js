/*
Kth Largest Element in an Array
Find the kth largest element in an unsorted array. 
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

let input = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];
let k = 2;
var findKthLargest = function (nums, k) {
    let output = [];
    nums = nums.sort((a, b) => { return a - b });
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     if (nums[i] != nums[i - 1]) {
    //         output.push(nums[i]);
    //     }
    // }
    // return output[k - 1];
    return nums[nums.length - k]
};

console.log(findKthLargest(input, k));
