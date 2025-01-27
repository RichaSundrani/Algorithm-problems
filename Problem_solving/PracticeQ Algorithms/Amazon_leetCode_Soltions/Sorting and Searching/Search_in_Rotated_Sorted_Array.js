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

// ____________ Working Solution ______________
var search = function (nums, target) {
    var result = -1;

    var pivot = false;
    var previous = null;

    for (var i = 0; i < nums.length; i++) {
        if (previous > nums[i] && !pivot) {
            pivot = true;
        }

        if (nums[i] === target) {
            result = i;
            break;
        }
        else if (pivot && nums[i] > target) {
            break;
        }

        previous = nums[i];
    }

    return result;
};

// ____________ Working Solution ______________
var search = function (nums, target) {

    if (nums.length == 0 || nums == null) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let pivot = left;
    left = 0;
    right = nums.length - 1;

    if (nums[pivot] <= target && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        //console.log(mid , nums[mid] , target);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;

};