/*
There are a total of n courses you have to take labelled from 0 to n - 1.
Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] 
this means you must take the course bi before the course ai.
Given the total number of courses numCourses and a list of the prerequisite pairs, 
return the ordering of courses you should take to finish all courses.
If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So the correct course order is [0,1].
Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. 
Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

 const findOrder = (numCourses, prerequisites) => {
     let graph = new Map(); 
     let degreeCourses = Array(numCourses).fill(0);
     for (const [course, preReq] of prerequisites) {
         if(graph.has(preReq)) {
            graph.get(preReq).push(course); 
         } else {
            graph.set(preReq, [course]);
         }
         degreeCourses[course]++;
         console.log(course, preReq); 
     }
     console.log(graph); 
     console.log(degreeCourses); 

     let queue = []; 
     for(let i=0; i<degreeCourses.length; i++){
         if(degreeCourses[i]===0) {
             queue.push(i); // i represents the course and value at i represents count of dependencies 
         }
     }

     let courseOrder = [];
     while(queue.length) {
         const course = queue.shift(); 
         if(graph.has(course)) {
            for(const element of graph.get(course)) {
                degreeCourses[element] = degreeCourses[element] -1 ;
                if(degreeCourses[element] === 0) { 
                    queue.push(element);
                }
            }
         }
         courseOrder.push(course); 
     }
     if(numCourses === courseOrder.length) {
        return courseOrder;
     } else {
         return [];
     }
 }

 
  console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));


  /*
  var findOrder = function(numCourses, prerequisites) {
    const order = [];
    const queue = [];
    const graph = new Map();
    const indegree = Array(numCourses).fill(0);
  
    for (const [course, preReq] of prerequisites) {
      // build graph map
      if (graph.has(preReq)) {
        console.log(graph.get(preReq));
        graph.get(preReq).push(course);
        console.log(graph.get(preReq));
      } else {
        graph.set(preReq, [course]);
      }
      // build indegree array
      indegree[course]++;
    }
  
    for (let i = 0; i < indegree.length; i++) {
        // first process the courses with no preReq
      if (indegree[i] === 0) queue.push(i);
    }
  
    while (queue.length) {
      const course = queue.shift();
      if (graph.has(course)) {
        for (const e of graph.get(course)) {
          indegree[e]--;
          if (indegree[e] === 0) queue.push(e);
        }
      }
      order.push(course);
    }
  
    return numCourses === order.length ? order : [];
  };

  */