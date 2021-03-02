/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished
 */

var input = [[1, 4], [2, 4], [3, 1], [3, 2]];
var maxcourse = 5;
var canFinish = function (numCourses, prerequisites) {
    let myCourses = new Set();
    // let myCourses = [];
    for (let courseId = 0; courseId < numCourses; courseId++) {
        prerequisites.forEach(element => {
            if (element[0] === courseId) {
                console.log(`Course ${courseId} has prerequisite ${element[1]}`);
                if (myCourses.has(element[1])) {
                    // if (myCourses.includes(element[1])) {
                    console.log(`${element[1]} prerequisite is already in course list `);
                } else {
                    myCourses.add(element[1]);
                    // myCourses.push(element[1]);
                }
            } else {
                console.log(`Course ${courseId} has no prerequisite!`);
                myCourses.add(courseId);
                // myCourses.push(courseId);
            }
        });
    }
    if (myCourses.size <= numCourses) {
        return true;
    } else {
        return false;
    }
};

console.log(canFinish(maxcourse, input))