/*
You have a graph of n nodes labeled from 0 to n - 1. 
You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates 
that there is an undirected edge between nodes ai and bi in the graph.
Return true if the edges of the given graph make up a valid tree, and false otherwise.
Example 1:
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
Example 2:

Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false

Constraints:
1 <= 2000 <= n
0 <= edges.length <= 5000
edges[i].length == 2
0 <= ai, bi < n
ai != bi
There are no self-loops or repeated edges.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function (n, edges = null) {
    if (n !== edges.length + 1) {
        return false;
    }
    const adj = Array(n).fill(null).map(r => new Set());
     
    const queue = [];
    const visited = new Set();
    for (let edge of edges) {
        let [n1, n2] = edge;
        adj[n1].add(n2);
        adj[n2].add(n1);
    }
    console.log(adj);
    queue.push(0);
    while (queue.length != 0) {
        let cur = queue.shift();
        console.log(cur);
        if (visited.has(cur)) return false;
        visited.add(cur);
        for (let n of adj[cur]) {
            queue.push(n);
            adj[n].delete(cur);
        }
    }
    return visited.size === n;
}

let n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]];
let res = validTree(n, edges);
console.log(res);