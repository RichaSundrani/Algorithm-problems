/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:
Input: matrix = [[1]]
Output: [[1]]
Example 4:
Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]

Constraints:
matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

// _________ My Solution ____Working ____________
var rotate = function (matrix) {
    const counter = matrix[0].length;
    const matrixLength = matrix.length;
    for (let i = 0; i < counter; i++) {
        let temp = [];
        for (let j = matrixLength - 1; j >= 0; j--) {
            temp.push(matrix[j][i]);
            console.log(temp);
        }
        matrix.push(temp);
    }
    matrix.splice(0, matrixLength);
    console.log(matrix);
    return matrix;
};



// _________ Working Solution ____________

var rotate = function (matrix) {
    const n = matrix.length;

    // iterate through matrix, rotating the elements in the 4 corresponding spots on each side
    // avoid overwriting elements during the iteration
    for (let i = 0; i < Math.ceil(n / 2); i += 1) {
        for (let j = i; j < n - 1 - i; j += 1) {
            let a = matrix[i][j];
            let b = matrix[j][n - 1 - i];
            let c = matrix[n - 1 - i][n - 1 - j];
            let d = matrix[n - 1 - j][i];

            matrix[j][n - 1 - i] = a;
            matrix[n - 1 - i][n - 1 - j] = b;
            matrix[n - 1 - j][i] = c;
            matrix[i][j] = d;
        }
    }
};