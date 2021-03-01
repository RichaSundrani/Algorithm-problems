/*
Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
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

// ________ Working Solution _________

const trap = (heights) => {
    const stack = [];
    let result = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
            let center = heights[stack.pop()];
            if (stack.length > 0) {
                let left = heights[stack[stack.length - 1]];
                let right = heights[i];
                result += Math.min(left - center, right - center) * (i - stack[stack.length - 1] - 1);
            }
        }
        stack.push(i);
    }
    return result;
};


// _____________ Working Solution __________

var trap = function (height) {
    var res = 0;
    var left = 0;
    var right = height.length - 1;
    var leftMax = 0;
    var rightMax = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                res += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                res += rightMax - height[right];
            }
            right--;
        }
    }

    return res;
};