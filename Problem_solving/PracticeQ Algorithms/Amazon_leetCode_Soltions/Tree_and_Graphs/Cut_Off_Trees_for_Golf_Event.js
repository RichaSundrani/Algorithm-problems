/*
Cut Off Trees for Golf Event
You are asked to cut off all the trees in a forest for a golf event.
The forest is represented as an m x n matrix. In this matrix:
0 means the cell cannot be walked through.
1 represents an empty cell that can be walked through.
A number greater than 1 represents a tree in a cell that can be walked through, and this number is the tree's height.
In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can choose whether to cut it off.
You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell).
Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1.
You are guaranteed that no two trees have the same height, and there is at least one tree needs to be cut off.
Example 1:
Input: forest = [[1,2,3],[0,0,4],[7,6,5]]
Output: 6
Explanation: Following the path above allows you to cut off the trees from shortest to tallest in 6 steps.
Example 2:
Input: forest = [[1,2,3],[0,0,0],[7,6,5]]
Output: -1
Explanation: The trees in the bottom row cannot be accessed as the middle row is blocked.
Example 3:
Input: forest = [[2,3,4],[0,0,5],[8,7,6]]
Output: 6
Explanation: You can follow the same path as Example 1 to cut off all the trees.
Note that you can cut off the first tree at (0, 0) before making any steps.
Constraints:
m == forest.length
n == forest[i].length
1 <= m, n <= 50
0 <= forest[i][j] <= 10^9
*/

// _____________ Working Solution ________________
var cutOffTree = function (forest) {
    // first we want to find the end node. which is the highest tree.
    // then we're going to do 
    const trees = findAllTrees(forest);
    let location = { x: 0, y: 0, pathLength: 0 };
    let distance = 0;
    while (trees.length) {
        let tree = trees.pop();
        let travelled = bfs(forest, location.x, location.y, tree.x, tree.y);
        if (travelled >= 0) {
            distance += travelled;
            location = { x: tree.x, y: tree.y };
        } else {
            return -1;
        }
    }
    return distance;
};

function bfs(forest, sX, sY, eX, eY) {
    const xLength = forest.length;
    const yLength = forest[0].length;
    const visited = createVisitedMatrix(xLength, yLength);
    const queue = [];
    queue.unshift({ x: sX, y: sY, pathLength: 0 });
    while (queue.length > 0) {
        const field = queue.pop();
        if (field.x < 0 || field.x >= xLength || field.y < 0 || field.y >= yLength) {
            continue; // isn't a valid path to the matrix.
        }
        if (visited[field.x][field.y]) {
            continue;
        }
        visited[field.x][field.y] = true;
        if (forest[field.x][field.y] == 0) {
            continue;
        }

        if (field.x == eX && field.y == eY) {
            return field.pathLength;
        }
        // add the next ones;
        queue.unshift({ x: field.x - 1, y: field.y, pathLength: field.pathLength + 1 });
        queue.unshift({ x: field.x, y: field.y + 1, pathLength: field.pathLength + 1 });
        queue.unshift({ x: field.x + 1, y: field.y, pathLength: field.pathLength + 1 });
        queue.unshift({ x: field.x, y: field.y - 1, pathLength: field.pathLength + 1 });

    }

    return -1;
}
// creates a matrix 
function createVisitedMatrix(x, y) {
    const matrix = new Array(x);
    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < y; j++) {
            matrix[i].push(false);
        }
    }
    return matrix;
}
// Finds all trees in the matrix and sort's them by descending height
function findAllTrees(forest) {
    if (!forest) return;
    let trees = [];
    for (let i = 0; i < forest.length; i++) {
        for (let j = 0; j < forest[i].length; j++) {
            if (forest[i][j] > 1) {
                trees.push({ x: i, y: j, height: forest[i][j] });
            }
        }
    }
    trees.sort((a, b) => b.height - a.height);
    return trees;
}





// _____________ Working Solution ________________

var cutOffTree = function (forest) {
    const R = forest.length;
    const C = forest[0].length;

    const sortedTrees = sortTreesByHeight(forest);

    let sr = 0, sc = 0; // start node.
    let steps = 0; // steps taken to cut all trees.

    while (sortedTrees.length) {
        const [tr, tc] = sortedTrees.shift();

        // run BFS from start to target node.
        const partialSteps = cutOffTreeBfs(forest, sr, sc, tr, tc);

        if (partialSteps >= 0) {
            // increment steps by partialSteps, and set the start 
            // node of the BFS to be the target we just reached.
            steps += partialSteps;
            sr = tr;
            sc = tc;
        } else {
            return -1;
        }
    }
    return steps;
};

function sortTreesByHeight(forest) {
    const trees = [];
    for (let i = 0; i < forest.length; i++) {
        for (let j = 0; j < forest[0].length; j++) {
            if (forest[i][j] > 1) {
                trees.push([i, j, forest[i][j]]);
            }
        }
    }
    // sort height from smallest to biggest.
    trees.sort((x, y) => x[2] - y[2]);
    return trees;
}

function cutOffTreeBfs(forest, sr, sc, tr, tc) {
    const R = forest.length;
    const C = forest[0].length;

    // add start node to the queue with a dist of 0.
    const queue = [[sr, sc, 0]];

    // create visited matrix and initialize it to false.
    const visited = new Array(R);
    for (let i = 0; i < R; i++) {
        visited[i] = new Array(C).fill(false);
    }

    // mark the start node as visited.
    visited[sr][sc] = true;


    while (queue.length) {
        const [r, c, dist] = queue.shift();

        // if we reached the target, return the distance so far.
        if (r == tr && c === tc) {
            return dist;
        }

        // get the neighbors of the current node, 
        // getNeighbors will return only valid neighbors.
        const neighbors = getNeighbors(R, C, forest, visited, r, c);

        for (const [nr, nc] of neighbors) {
            visited[nr][nc] = true;
            // add neighbor to the queue 
            // and set its distance by current dist plus 1.
            queue.push([nr, nc, dist + 1]);
        }
    }

    return -1;
}

function getNeighbors(R, C, forest, visited, r, c) {
    const neighbors = [];
    // direction vectors for moving in the matrix.
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let i = 0; i < directions.length; i++) {
        const nr = r + directions[i][0];
        const nc = c + directions[i][1];
        // add only valid nodes.
        if (isValid(R, C, forest, visited, nr, nc)) {
            neighbors.push([nr, nc]);
        }
    }
    return neighbors;
}

function isValid(R, C, forest, visited, r, c) {
    const inBounds = r >= 0 && r < R && c >= 0 && c < C;
    if (!inBounds || visited[r][c]) return false;
    // valid node = not visited and not an obstacle;
    return !visited[r][c] && forest[r][c] !== 0;
}