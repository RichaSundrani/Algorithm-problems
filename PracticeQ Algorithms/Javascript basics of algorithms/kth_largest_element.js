/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in
the sorted order, not the kth distinct element.
*/

var input = [2, 4, 5, 6, 7, 8, 8, 9, 1];
let kLargest = (nums, k) => {
    nums = nums.sort((a, b) => b - a);
    return nums[k - 1];
};

console.log(kLargest(input, 3));