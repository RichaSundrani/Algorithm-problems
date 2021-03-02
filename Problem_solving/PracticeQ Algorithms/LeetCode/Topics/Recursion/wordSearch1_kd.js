let crossword = [
    ["S", "B", "F", "D"],
    ["S", "F", "S", "A"],
    ["A", "D", "X", "D"],
    ["A", "D", "C", "E"],
]
let searchword = "ADD";
function findAdjacent(x, y, cw, sw, n) {
    let temp = [];
    if ((x - 1) >= 0) {
        temp.push({x: x - 1, y: y});
    }
    if ((y - 1) >= 0) {
        temp.push({x: x, y: y - 1});
    }
    if ((x + 1) < cw.length) {
        temp.push({x: x + 1, y: y})
    }
    if ((y + 1) < cw[x].length) {
        temp.push({ x: x, y: y + 1})
    }
    for (e in temp) {
        let xp = temp[e].x;
        let yp = temp[e].y;
        if (cw[xp][yp] == sw[n]) {
            if (n + 1 < sw.length) {
                if (findAdjacent(xp, yp, cw, sw, n + 1)) {
                    console.log("Stack " + sw[n] + " at " + xp + " " + yp);
                    return true;
                }
            } else {
                console.log("Stack " + sw[n] + " at " + xp + " " + yp);
                return true;
            }
        }
    };
}
function findWord(letterBoard, searchTerm) {
    for (let i = 0; i < letterBoard.length; i++) {
        for (let j = 0; j < letterBoard[i].length; j++) {
            if (letterBoard[i][j] == searchTerm[0]) {
                if (searchTerm.length > 1) {
                    if (findAdjacent(i, j, letterBoard, searchTerm, 1)) {
                        console.log("Stack " + searchTerm[0] + " at " + i + " " + j);
                        return true;
                    }
                } else {
                    console.log("Stack " + searchTerm[0] + " at " + i + " " + j);
                    return true;
                }
            }
        }
    }
    return false;
}

if (findWord(crossword, searchword)) {
    console.log("Found!");
} else {
    console.log("Not Found!")
}