var canFinish = function (numCourses, prerequisites) {
    if (!prerequisites.length) return true;
    const buildGraph = (courses) => {
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

    const depthFirstSearch = (node) => {
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


canFinish(2, [[1, 0], [0, 1]]);