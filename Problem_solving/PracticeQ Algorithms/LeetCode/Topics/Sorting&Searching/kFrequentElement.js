/*
Top K Frequent Elements
Given a non-empty array of integers, return the k most frequent elements.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:
Input: nums = [1], k = 1
Output: [1]
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
*/
var input = [1, 1, 1, 2, 2, 3];
var topKFrequent = function (nums, k) {
    let countObj = [];
    let max = 0;
    let maxNum = [];
    for (let i = 0; i < nums.length; i++) {
        if (countObj[nums[i]]) {
            countObj[nums[i]]++;
        } else {
            countObj[nums[i]] = 1;
        }
    }

    for (let j = 0; j <= k; j++) {
        for (let n in countObj) {
            if (countObj[n] > max) {
                max = countObj[n];
            }
        }
        maxNum.push(countObj.indexOf(max));
        countObj.splice(countObj.indexOf(max), 1);
        max = 0;
        console.log(maxNum);
    }
    console.log(max, maxNum);
}


console.log(topKFrequent(input, 2));


// let someArr = [];
// someArr.push(1);
// someArr.push(1);
// someArr['richa'] = 100;
// someArr['nimmu'] = 50;
// console.log(someArr['nimmu']);
// console.log(someArr.richa);