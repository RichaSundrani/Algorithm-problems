/*
Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/
var input = [[1,4],[4,5]];
var merge = function(intervals) {
    for(let i=0; i<intervals.length; i++){
        if(i+1 <= intervals.length) {
            if((intervals[i])[intervals[i].length-1] >= (intervals[i+1])[0]){
                //  let temp =[];
                //  temp.push((intervals[i])[0]);
                //  temp.push((intervals[i+1])[intervals[i+1].length-1]);
                //  console.log(temp);
                 (intervals[i+1]).copyWithin((0, (intervals[i])[0]));
                 intervals.splice(i, 0);
                 // intervals[i] = temp;
                 console.log(intervals);
            }
        }
    }
    return intervals;
};

// solution 

// function merge(intervals) {
//     var result = [], last;
//     intervals.forEach(function (r) {
//         if (!last || r[0] > last[1])
//             result.push(last = r);
//         else if (r[1] > last[1])
//             last[1] = r[1];
//     });
//     return result;
// }

console.log(merge(input));
// console.log(JSON.stringify(merge(input)));