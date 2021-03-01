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
-105 <= nums[i] <= 105
*/

var input = [1, 2, -2, -1];

var threeSum = function (nums) {
    let result = [];
    if (nums.every((element) => element != 0)) {
        nums.forEach((element, index) => {
            for (let i in nums) {
                if (i !== index && index > i) {
                    for (let k = nums.length - 1; k > i; k--) {
                        if ((element + nums[i] + nums[k]) === 0) {
                            let temp = [element, nums[i], nums[k]];
                            if (isUnique(result, temp)) {
                                result.push(temp);
                            }
                        }
                    }
                }
            }
        })
        return result;
    }
    return result;
};

let isUnique = (resultArr, tempArr) => {
    for (let i in resultArr) {
        if (resultArr[i].includes(tempArr[0]) && resultArr[i].includes(tempArr[1]) && resultArr[i].includes(tempArr[2])) {
            return false;
        }
    }
    return true;
};

console.log(threeSum(input)); 