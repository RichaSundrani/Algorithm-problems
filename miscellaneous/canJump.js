/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */
let input = [2,0,0];
var canJump = function (nums) {
    if (nums.length <= 1) { return true };
      while(nums.length>=2){
        nums.splice(0, nums[0])
        console.log(nums);
        if(nums.length === 0){
            return true;
        } 
        if(nums[0]===0 && nums.length >1){
            return false;
        }
        if (nums.length <= 1) { return true };
      }
    return false;
};

console.log(canJump(input));
console.log("break");


// var canJump = function(nums) {
//     let last = nums.length - 1;
//     for (let i = last - 1; i >= 0; i--) {
//         if (i + nums[i] >= last) {
//             console.log(last);
//             last = i;
//         };
//     };
//     return last === 0;
// };

// var canJump = nums => !nums.reduceRight((a, n, i) => i + n >= a ? i : a, nums.length - 1);
