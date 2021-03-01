/*
Search in Rotated Sorted Array
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.
Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
If target is found in the array return its index, otherwise, return -1.
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1

Constraints:
1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-10^4 <= target <= 10^4
*/

var input = [4, 5, 6, 7, 0, 1, 2];
var search = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        var randomIndex = Math.floor(Math.random() * (nums.length - i));
        var item = nums.splice(randomIndex, 1);
        nums.push(parseInt(item));
        console.log(nums);
    }
    if (nums.includes(target)) {
        console.log(nums.indexOf(target));
        return nums.indexOf(target);
    } else {
        return -1;
    }
};



console.log(search(input, 7));