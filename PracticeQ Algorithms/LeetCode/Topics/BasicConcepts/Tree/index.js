var geoTree = {
    name: "North America",
    parent: null,
    children: [
        {
            name: "Canada",
            parent: "North America",
            children: [
                {
                    name: "British Columbia",
                    parent: "Canada",
                    children: []
                },
                {
                    name: "Calgeri",
                    parent: "Canada",
                    children: []
                }
            ]
        },
        {
            name: "USA",
            parent: "North America",
            children: [
                {
                    name: "New York",
                    parent: "USA",
                    children: []
                },
                {
                    name: "Arkansas",
                    parent: "USA",
                    children: [
                        {
                            name: "Fayetteville",
                            parent: "Arkansas",
                            children: []
                        },
                        {
                            name: "Rogers",
                            parent: "Arkansas",
                            children: []
                        }
                    ]
                },
                {
                    name: "California",
                    parent: "USA",
                    children: [
                        {
                            name: "Oakland",
                            parent: "California",
                            children: []
                        },
                        {
                            name: "SFO",
                            parent: "California",
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
};

function geoTreePrint(geoTree, prefix) {
    console.log(prefix + geoTree.name);
    if (geoTree.children.length != 0) {
        prefix += prefix;
        for (i in geoTree.children) {
            geoTreePrint(geoTree.children[i], prefix);
        }
    }
};

// geoTreePrint(geoTree, ' ');

// function dfs(geoT, searchTerm) {
//     if(found){
//         return;
//     }
//     console.log(geoT.name);
//     if (geoT.name == searchTerm) {
//         console.log("found the match!!!");
//         found = true;
//         return; 
//     }
//     else if (geoT.children.length != 0) {
//         for (i in geoT.children) {
//             geoTreeSearch(geoT.children[i], searchTerm);
//         }
//     }
// };

// var found = false;
// dfs(geoTree, "Rogers");


bfs(geoTree, "California")
function bfs(geoT, searchTerm) {
    var queue = [];
    queue.push(geoT);

    while (true) {
        let node;
        if (queue.length > 0) {
            node = queue.shift();
        } else {
            break;
        }

        console.log(node.name)
        if (node.name == searchTerm) {
            console.log("found the match!!!");
            break;
        } else {
            node.children.forEach((child) => {
                queue.push(child);
            })
        }

    }
}

// function bfsPrint(gt){
//     if(gt.children.length!=0){
//         console.log(gt.name);
//         for(i in gt.children){
//             console.log(gt.children[i].name);
//         }

//     }

// };
// bfsPrint(geoTree);



// North America 
//  - Canada
//      - BC
//      - Cl
//  - USA
//      - NY
//      - AR
//         - Fy
//         - R
//      - Ca