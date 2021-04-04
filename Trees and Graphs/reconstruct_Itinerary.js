/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

/*
Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
*/
let input = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
var findItinerary = function (tickets) {
   let ticketGraph = createGraph(tickets); 
   console.log(ticketGraph); 
   let itinerary = dfs(ticketGraph, 'JFK');
   return itinerary.reverse();
};

function createGraph(allTickets) {
     let ticketMap = new Map();
     for(let [source, destination] of allTickets ) {
         if(ticketMap.has(source)) {
            ticketMap.get(source).push(destination);
            ticketMap.get(source).sort();
         } else {
            ticketMap.set(source, [destination]); 
         }
     }
     return ticketMap; 
}

function dfs(graph, source, output = []) {
    const neighbors = graph.get(source) || [];
    while (neighbors.length) {
      const v = neighbors.shift();
      dfs(graph, v, output);
    }
    output.push(source);
    return output;
  }


console.log(findItinerary(input));
console.log("lexicalSort(output)");


// let output = [
//     ["JFK", "SFO", "ATL", "JFK", "ATL", "SFO"],
//     ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
// ];

// function lexicalSort(arr) {
//     arr.sort((a, b) => {
//         let aStr = a.join('');
//         let bStr = b.join('');
//         if (aStr > bStr) {
//             return 1;
//         } else {
//             return -1;
//         }
//     }); 
//     return arr; 
// };
