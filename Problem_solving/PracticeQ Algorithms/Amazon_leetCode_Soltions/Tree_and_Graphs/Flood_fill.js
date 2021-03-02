/*
Flood Fill
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel),
and so on. Replace the color of all of the aforementioned pixels with the newColor.
At the end, return the modified image.
Example 1:
Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:
The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
*/
//_________________ Working Solution ___________________
var floodFill = function (image, sr, sc, newColor) {
    helper(image, sr, sc, image[sr][sc], newColor);
    return image;
};

const helper = (image, sr, sc, originalColor, newColor) => {
    if (sr < 0 || sr === image.length || sc < 0 || sc === image[sr].length || image[sr][sc] !== originalColor || image[sr][sc] === newColor) {
        return;
    }
    image[sr][sc] = newColor;
    helper(image, sr - 1, sc, originalColor, newColor);
    helper(image, sr + 1, sc, originalColor, newColor);
    helper(image, sr, sc - 1, originalColor, newColor);
    helper(image, sr, sc + 1, originalColor, newColor);
}


//_________________ Working Solution ___________________
const floodFill = (image, sr, sc, newColor) => {
    //Get the input which needs to be replaced.
    const current = image[sr][sc];
    //If the newColor is same as the existing 
    //Then return the original image.
    if (current === newColor) {
        return image;
    }
    //Other wise call the fill function which will fill in the existing image.
    fill(image, sr, sc, newColor, current);
    //Return the image once it is filled
    return image;
};

const fill = (image, sr, sc, newColor, current) => {
    //If row is less than 0
    if (sr < 0) {
        return;
    }
    //If column is less than 0
    if (sc < 0) {
        return;
    }
    //If row is greater than image length
    if (sr > image.length - 1) {
        return;
    }
    //If column is greater than image length
    if (sc > image[sr].length - 1) {
        return;
    }
    //If the current pixel is not which needs to be replaced
    if (image[sr][sc] !== current) {
        return;
    }
    //Update the new color
    image[sr][sc] = newColor;
    //Fill in all four directions
    //Fill Prev row
    fill(image, sr - 1, sc, newColor, current);
    //Fill Next row
    fill(image, sr + 1, sc, newColor, current);
    //Fill Prev col
    fill(image, sr, sc - 1, newColor, current);
    //Fill next col
    fill(image, sr, sc + 1, newColor, current);

};

