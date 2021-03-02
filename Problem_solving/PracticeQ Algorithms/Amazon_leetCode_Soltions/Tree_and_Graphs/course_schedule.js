/*
Course Schedule
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
take course bi first if you want to take course ai.
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
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
Constraints:

1 <= numCourses <= 105
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
*/

// ______________ Working Solution ___________
var canFinish = function (numCourses, prerequisites) {
    if (!prerequisites.length) return true;

    const buildGraph = courses => {
        const graph = {};

        while (courses.length) {
            const [course, prerequisite] = courses.shift();

            if (graph[course] !== undefined) {
                graph[course].push(prerequisite);
            } else {
                graph[course] = [prerequisite];
            }

            if (graph[prerequisite] === undefined) {
                graph[prerequisite] = [];
            }
        }

        return graph;
    };

    const courseGraph = buildGraph(prerequisites.slice(0));
    const discovered = new Set();
    const coursesTaken = [];
    const processing = new Set();
    let hasCycle = false;

    const depthFirstSearch = node => {
        if (processing.has(node)) {
            hasCycle = true;
            return;
        }

        if (hasCycle) return;
        if (discovered.has(node)) return;

        discovered.add(node);
        processing.add(node);

        courseGraph[node].forEach(depthFirstSearch);

        processing.delete(node);
        coursesTaken.push(node);
    };

    for (let i = 0; i < prerequisites.length; i++) {
        const node = prerequisites[i][0];
        depthFirstSearch(node);
    }

    return !hasCycle;
};

// ______________ Working Solution ______________
var canFinish = function (numCourses, prerequisites) {
    const visited = new Set();
    const visiting = new Set();

    // Initialize an array of all the courses (i.e. index 0 for course 0, index
    // 1 for course 1). For each course, populate an array of all the courses
    // that depend on it
    const prereqCourseArr = [...new Array(numCourses)].map(() => []);
    prerequisites.forEach(([course, prereq]) => {
        prereqCourseArr[prereq].push(course);
    });

    // Do DFS on each course
    for (let course = 0; course < numCourses; course++) {
        // There is a cycle, this course cannot be finished
        if (!dfs(course)) {
            return false;
        }
    };
    return true;

    function dfs(course) {
        // We have seen and verified this course can be finished
        if (visited.has(course)) {
            return true;
        }

        // This is one of the courses we are seeing during the current search
        // (i.e. there is a cycle)
        if (visiting.has(course)) {
            return false;
        }

        // Add the course to courses we are seeing during the current search
        visiting.add(course);

        // Iterate through all the other courses that depend on the current
        // course. For each one, do DFS
        const coursesDependingOnThis = prereqCourseArr[course];
        for (let i = 0; i < coursesDependingOnThis.length; i++) {
            const courseDependingOnThis = coursesDependingOnThis[i];
            if (!dfs(courseDependingOnThis)) {
                return false;
            }
        }

        visiting.delete(course);
        visited.add(course);
        return true;
    };
};

// ______________ Working Solution ______________
var canFinish = function (numCourses, prerequisites) {
    const visited = new Set();
    const visiting = new Set();

    // Initialize an array of all the courses (i.e. index 0 for course 0, index
    // 1 for course 1). For each course, populate an array of all the courses
    // that depend on it
    const prereqCourseArr = [...new Array(numCourses)].map(() => []);
    prerequisites.forEach(([course, prereq]) => {
        prereqCourseArr[prereq].push(course);
    });

    // Do DFS on each course
    for (let course = 0; course < numCourses; course++) {
        // There is a cycle, this course cannot be finished
        if (!dfs(course)) {
            return false;
        }
    };
    return true;

    function dfs(course) {
        // We have seen and verified this course can be finished
        if (visited.has(course)) {
            return true;
        }

        // This is one of the courses we are seeing during the current search
        // (i.e. there is a cycle)
        if (visiting.has(course)) {
            return false;
        }

        // Add the course to courses we are seeing during the current search
        visiting.add(course);

        // Iterate through all the other courses that depend on the current
        // course. For each one, do DFS
        const coursesDependingOnThis = prereqCourseArr[course];
        for (let i = 0; i < coursesDependingOnThis.length; i++) {
            const courseDependingOnThis = coursesDependingOnThis[i];
            if (!dfs(courseDependingOnThis)) {
                return false;
            }
        }

        visiting.delete(course);
        visited.add(course);
        return true;
    };
};