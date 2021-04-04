/*
Given a matrix of integers matrixwith R rows and C columns, find the maximum score of a path starting at [0,0] and ending at [R-1,C-1].
The score of a path is the minimum value in that path.  For example, the value of the path 8 →  4 →  5 →  9 is 4.
matrixpath moves some number of times from one visited cell to any neighbouring unvisited cell in one of the 4 cardinal directions 
(north, east, west, south).

Example 1:
Input: [[5,4,5],[1,2,6],[7,4,6]]
Output: 4
Explanation: 
The path with the maximum score is highlighted in yellow. 
Example 2:
Input: [[2,2,1,2,2,2],[1,2,2,2,1,2]]
Output: 2
Example 3:
Input: [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
Output: 3

Note:
1 <= R, C <= 100
0 <= matrix[i][j] <= 10^9
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */

var maximumMinimumPath = function (matrix) {
  let row = matrix.length;
  if (row === 0) {
    return -1;
  }
  let col = matrix[0].length;
  let dp = Array.from({ length: row }, () => []);
  console.log(dp);
  dp[0][0] = matrix[0][0];
  let queue = [[0, 0]];
  let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  while (queue.length > 0) {
    let len = queue.length;
    console.log(len);
    let newQueue = [];
    for (let i = 0; i < len; i++) {
      let [x, y] = queue.pop();
      directions.forEach(([dx, dy]) => {
        let tx = x + dx;
        let ty = y + dy;
        if (tx < 0 || ty < 0 || tx >= row || ty >= col) return;
        let newVal = Math.min(matrix[tx][ty], ~~dp[x][y]);
        if (newVal > ~~dp[tx][ty]) {
          // valid path, updated
          dp[tx][ty] = newVal;
          newQueue.push([tx, ty]);
        }
      })
    }
    queue = newQueue;
  }

  return ~~dp[row - 1][col - 1];
};

console.log(maximumMinimumPath([[5, 4, 5], [1, 2, 6], [7, 4, 6]]));







//  function maximumMinimumPath(matrix) {
//     if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
//       return 0;
//     }
//     const height = matrix.length;
//     const width = matrix[0].length;
//     const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
//     const queue = [[0, 0]];
//     const dp = [...Array(height)].map(() => Array(width).fill(0));
//     dp[0][0] = matrix[0][0];

//     while (queue.length) {
//       const [x, y] = queue.shift();
//       for (const [dx, dy] of directions) {
//         const i = x + dx;
//         const j = y + dy;
//         if (i < 0 || j < 0 || i >= height || j >= width) continue;
//         const score = Math.min(matrix[i][j], dp[x][y]);
//         if (score > dp[i][j]) {
//           // only continue if it is on the the path that has bigger score
//           dp[i][j] = score;
//           queue.push([i, j]);
//         }
//       }
//     }

//     return dp[height - 1][width - 1];
//   }
