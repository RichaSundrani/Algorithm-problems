

let input = [1, 1, 2];
// var removeDuplicates = function(nums) {
//     return [...new Set(nums)];
// };

var removeDuplicates = function (nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] && (nums[i] === nums[i + 1])) {
            nums.splice(i, 1);
            console.log(nums);
        }
    }
    return nums;
};

console.log(removeDuplicates(input));