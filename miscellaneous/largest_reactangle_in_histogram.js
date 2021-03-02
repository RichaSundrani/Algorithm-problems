// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, 
// find the area of largest rectangle in the histogram.

// var input = [2, 1, 5, 6, 2, 3];
var input = [4, 2, 0, 3, 2, 4, 3, 4];
var largestRectangleArea = function (height) {
    if (height.length === 0) {
        return 0
    };
    height.push(0);
    var areas = [];
    let temp = [];
    let minHeight = 0;
    let minWidth = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i; j < height.length; j++) {
            temp.push(height[j]);
            minHeight = Math.min(...temp);
            minWidth = minWidth + 1;
            const area = minHeight * minWidth;
            console.log(area);
            areas.push(area);
        }
        minWidth = 0;
        temp = [];
    }
    console.log(areas);
    return Math.max(...areas);

    // OR 
    // let startHeight = height.indexOf(Math.max(...height));
    // let leftMin = height[startHeight];
    // let rightMin = height[startHeight];
    // for (let i = startHeight; i < height.length; i++) {
    //     rightMin = Math.min(rightMin, height[i]);
    //     const width = (i - startHeight) + 1;
    //     const area = rightMin * width;
    //     areas.push(area);
    // }
    // for (let j = startHeight; j >= 0; j--) {
    //     leftMin = Math.min(leftMin, height[j]);
    //     const width = (startHeight -j) + 1;
    //     const area = leftMin * width;
    //     areas.push(area);
    // }

};

console.log(largestRectangleArea(input));
console.log(" Break ");

// 
// var largestRectangleArea = function (heights) {
//     // to deal with last element without going out of bound
//     heights.push(0)
//     const stack = [];
//     let maxArea = 0, curr, currH, top, topH, area;

//     for (let i = 0; i < heights.length; i++) {
//         top = stack[stack.length - 1];
//         topH = heights[top];
//         // pop from stack as long as the top of the stack
//         // is greater than the current height and
//         // the stack has at least 2 items
//         while (stack.length > 1 && topH > heights[i]) {
//             curr = stack.pop();
//             currH = heights[curr];
//             top = stack[stack.length - 1];
//             topH = heights[top];
//             area = currH * (i - 1 - top);
//             maxArea = Math.max(area, maxArea);
//         }

//         // when only 1 item left in the stack
//         if (stack.length && topH > heights[i]) {
//             curr = stack.pop();
//             currH = heights[curr];
//             area = currH * i;
//             maxArea = Math.max(area, maxArea);
//         }
//         stack.push(i);
//     }
//     return maxArea;
// };