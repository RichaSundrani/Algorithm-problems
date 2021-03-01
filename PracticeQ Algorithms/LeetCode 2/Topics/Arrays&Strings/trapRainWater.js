/*
Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:
n == height.length
0 <= n <= 3 * 10^4
0 <= height[i] <= 10^5
*/

var input = [4, 2, 0, 3, 2, 5];
var trap = function (height) {
    let totalWater = 0;
    let maxLeft = 0;
    let maxRight = 0;
    for (let i = 0; i < height.length; i++) {
        var righArr = height.slice(i + 1, height.length + 1)
        maxRight = Math.max.apply(null, righArr);
        console.log('maxRight---> ' + maxRight);
        var leftArr = height.slice(0, i)
        maxLeft = Math.max.apply(null, leftArr);
        console.log('maxLeft---> ' + maxLeft);
        let minHeight = Math.min(maxLeft, maxRight);
        if ((minHeight - height[i]) >= 1) {
            totalWater = totalWater + Math.abs((minHeight - height[i]));
        }
    }
    console.log(Math.abs(totalWater));
};
trap(input);