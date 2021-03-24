let crossword = [
    ["A", "B", "C", "E"],
    ["S", "E", "E", "S"],
    ["A", "D", "C", "E"]
]

let searchword = "SADE";

function findAdjacent(x, y, cw, sw, n) {
    if ((x - 1) >= 0) {
        if (cw[x - 1][y] == sw[n]) {
            if (n + 1 < searchword.length) {
                if (findAdjacent(x - 1, y, crossword, searchword, n + 1)) {
                    console.log("Stack " + sw[n] + " at " + (x-1) + " " + y);
                    return true;
                }
            } else {
                console.log("Stack " + sw[n] + " at " + (x-1) + " " + y);
                return true;
            }
        }
    }
    if ((y - 1) >= 0) {
        if (cw[x][y - 1] == sw[n]) {
            if (n + 1 < searchword.length) {
                if (findAdjacent(x, y - 1, crossword, searchword, n + 1)) {
                    console.log("Stack " + sw[n] + " at " + x + " " + (y-1));
                    return true;
                }
            } else {
                console.log("Stack " + sw[n] + " at " + x + " " + (y-1));
                return true;
            }
        }
    }
    if ((x + 1) < cw.length) {
        if (cw[x + 1][y] == sw[n]) {
            if (n + 1 < searchword.length) {
                if (findAdjacent(x + 1, y, crossword, searchword, n + 1)) {
                    console.log("Stack " + sw[n] + " at " + (x + 1) + " " + y);
                    return true;
                }
            } else {
                console.log("Stack " + sw[n] + " at " + (x + 1) + " " + y);
                return true;
            }
        }
    }
    if ((y + 1) < cw[x].length) {
        if (cw[x][y + 1] == sw[n]) {
            if (n + 1 < searchword.length) {
                if (findAdjacent(x, y + 1, crossword, searchword, n + 1)) {
                    console.log("Stack " + sw[n] + " at " + x + " " + (y+1));
                    return true;
                }
            } else {
                console.log("Stack " + sw[n] + " at " + x + " " + (y+1));
                return true;
            }
        }
    }
    return false;
}


function findWord(c, s) {
    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < c[i].length; j++) {
            if (c[i][j] == s[0]) {
                if (findAdjacent(i, j, c, s, 1)) {
                    console.log("Stack " + s[0] + " at " + i + " " + j);
                    return true;
                }
            }
        }
    }
}

if (findWord(crossword, searchword)) {
    console.log("Found!");
} else {
    console.log("Not Found!")
}
