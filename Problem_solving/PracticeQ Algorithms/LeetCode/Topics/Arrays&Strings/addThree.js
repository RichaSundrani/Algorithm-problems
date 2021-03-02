/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.
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

let input = [-1, 0, 1, 2, -1, -4];
var addThree = function (nums) {
    let sums = [];
    if (nums.length > 0) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length - 1; j++) {
                for (let k = nums.length; k > i; k--) {
                    // console.log(nums[i] + " " + nums[j] + " " + nums[k]);
                    if ((nums[i] + nums[j] + nums[k]) === 0) {
                        console.log(nums[i] + " " + nums[j] + " " + nums[k]);
                        let temp = [nums[i], nums[j], nums[k]];
                        if (!findDuplicate(sums, temp)) {
                            sums.push(temp);
                        }
                    }
                }
            }
        }
        return sums;
    } else {
        return nums;
    }
};

function findDuplicate(sums, temp) {
    for (i in sums) {
        if (temp.includes(sums[i][0]) && temp.includes(sums[i][1]) && temp.includes(sums[i][2])) {
            console.log('dupplicate Array');
            return true;
        }
    }
    return false;
}


console.log(addThree(input));