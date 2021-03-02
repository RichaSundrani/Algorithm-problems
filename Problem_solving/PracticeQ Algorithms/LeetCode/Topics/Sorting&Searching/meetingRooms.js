/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
return the minimum number of conference rooms required.
Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1
Constraints:
1 <= intervals.length <= 104
0 <= starti < endi <= 106
*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */

var input = [[0, 30], [5, 10], [15, 20]];
var minMeetingRooms = function (intervals) {
    let rooms = 0;
    if (intervals.length >= 1) {
        for (let i = 0; i < intervals.length; i++) {
            for (let j = i; j < intervals.length; j++) {
                if ((intervals[i][0] < intervals[j][0]) && (intervals[i][1] > intervals[j][1])) {
                    rooms = rooms + 1;
                } else if ((intervals[i][0] < intervals[j][0]) && (intervals[i][1] < intervals[j][1])) {
                    rooms = 1;
                }
            }
        }
        return rooms;
    } else {
        return rooms;
    }
};

console.log("Minimum Meeting Rooms : " + minMeetingRooms(input));