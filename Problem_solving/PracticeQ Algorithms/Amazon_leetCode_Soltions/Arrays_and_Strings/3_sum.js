/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:
Input: nums = []
Output: []
Example 3:
Input: nums = [0]
Output: []
Constraints:
0 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5
*/

// __________ Working Solution ____________

var threeSum = function (array) {
    array.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        if (array[i] != array[i - 1]) { // making sure our solution set does not contain duplicate triplets
            let left = i + 1;
            let right = array.length - 1;
            while (left < right) {
                const currentSum = array[i] + array[left] + array[right];
                if (currentSum === 0) {
                    triplets.push([array[i], array[left], array[right]]);
                    while (array[left] == array[left + 1]) left++
                    while (array[right] == array[right - 1]) right-- // making sure our solution set does not contain duplicate triplets
                    left++;
                    right--;
                } else if (currentSum < 0) {
                    left++
                } else if (currentSum > 0) {
                    right--
                }
            }
        }
    }
    return triplets
};