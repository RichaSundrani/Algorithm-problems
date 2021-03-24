let input = [5, 1, 4, null, null, 3, 6, 4, 5, 6, 7, null, null, null, null, 11, 12, null, null];

function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function (e) {
    this.queue.push(e);
}

Queue.prototype.dequeue = function () {
    return this.queue.splice(0, 1)[0];
}

Queue.prototype.length = function () {
    return this.queue.length;
}

let myQueue = new Queue();

let i = 0;
let tree = {
    name: input[i],
    left: null,
    right: null
}
i++;
myQueue.enqueue(tree);
// let input = [5, 1, 4, null, null, 3, 6, 4, 5, 6, 7, null, null, null, null, 11, 12, null, null];

while(myQueue.length()) {
    let temp = myQueue.dequeue();
    if (input[i]) {
        temp.left = {
            name: input[i],
            left: null,
            right: null
        }
        myQueue.enqueue(temp.left);
    }
    i++;
    if (input[i]) {
        temp.right = {
            name: input[i],
            left: null,
            right: null
        }
        myQueue.enqueue(temp.right);
    }
    i++;
}
console.log(tree);
console.log('Done');

// function checkgame(input, player) {
//     let vertical, horizontal;
//     let crosslr = true, crossrl = true;
//     for (let i = 0; i < input.length; i++) {
//         vertical = input.every((e) => {
//             return e[i] === player;
//         });
//         if (vertical) {
//             return true;
//         }
//         horizontal = input[i].every((e) => {
//             return e === player;
//         });
//         if (horizontal) {
//             return true;
//         }
//         crosslr = crosslr && (input[i][i] == player);
//         crossrl = crossrl && (input[i][input.length-i-1] == player);
//     }
//     return crosslr || crossrl;
// }

// function gamemove(input, move) {
//     input[move[0]][move[1]] = move[2];
// }


// let moves = [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]];
// let output = [];
// let ttt;
// let player1 = 1;
// let player2 = 2;

// for (let i = 0; i < moves.length; i++) {
//     if ()
// }
// console.log(checkgame(crossword, player2))


// let searchword = "SSSSSSSSSSSSSSSSS";

// function findAdjacent(x, y, cw, sw, n) {
//     if (n >= sw.length) {
//         return true;
//     }

//     if (x < 0) {
//         return false;
//     }
//     if (y < 0) {
//         return false;
//     }
//     if (x >= cw.length) {
//         return false;
//     }
//     if (y >= cw[x].length) {
//         return false;
//     }
//     if (cw[x][y] != sw[n]) {
//         return false;
//     }

//     console.log(sw[n] + ' is found at ' + x + ' and ' + y)
//     if (findAdjacent(x + 1, y, cw, sw, n + 1)) {
//         return true;
//     };
//     if (findAdjacent(x - 1, y, cw, sw, n + 1)) {
//         return true;
//     };
//     if (findAdjacent(x, y + 1, cw, sw, n + 1)) {
//         return true;
//     };
//     if (findAdjacent(x, y - 1, cw, sw, n + 1)) {
//         return true;
//     };
//     console.log("Discarding this path.")
// }

// function findWord(c, s) {
//     for (let i = 0; i < c.length; i++) {
//         for (let j = 0; j < c[i].length; j++) {
//             if (findAdjacent(i, j, c, s, 0)) {
//                 return true;
//             }
//         }
//     }
// }
// let foo = ['a', 'b', 'c', 'd'];
// let bar = JSON.parse(JSON.stringify(foo));
// bar[1] = 'bp';

// console.log('Foo: ' + foo);
// console.log('Bar: ' + bar);

// if (findWord(crossword, searchword)) {
//     console.log("Found!");
// } else {
//     console.log("Not Found!")
// }

// let arr = [["a", "b", "c"], ["d", "e"], ["x", "y", "z"]]
// let arr = [["a", "b", "c"], ["d", "e"], ["x", "y", "z"], ["m", "n"]]

// function foo(a, idx, str) {
//     if (idx < a.length) {
//         for (let i = 0; i < a[idx].length; i++) {
//             foo(a, idx + 1, str + a[idx][i]);
//         }
//     } else {
//         console.log("blah: " + str)
//     }
// }

// foo(arr, 0, "")

// let foo = {'foo' : 5};
// let bar = foo;
// bar.foo = 6;

// let foo = 5;
// let bar = foo;
// bar += 1;

// // bar = bar + 1;

// console.log('Foo: ' + foo);
// console.log('Bar: ' + bar);

// let ages = [30, 60, 60, 60, 60];
// // let ages = [30, 60];
// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//     sum += ages[i];
// }
// let ave = sum/ages.length;
// console.log(ave);

// let alldata = [{ state: 'mp', age: 30 }, { state: 'mp', age: 50 }, { state: 'mp', age: 60 }, { state: 'mp', age: 35 }, { state: 'bv', age: 33 }, { state: 'bv', age: 31 }, { state: 'mh', age: 56 }];

// let unique = [...new Set(alldata.map((d) => { return d.state }))];

// let statesdata = [];
// unique.forEach((e) => {
//     let state = e;
//     let statedata = alldata.filter((indv) => {
//         return indv.state === e;
//     });
//     statesdata.push({state: e, statedata});
// })

// let states = alldata.map((d) => { return d.state });

// let stateave = []
// let mp = mpdata.reduce((acc, curr, idx) => {
//     let newave = ((acc.ave * acc.pop) + curr.age) / ((acc.pop + 1));
//     return { pop: acc.pop + 1, ave: newave };
// }, { pop: 0, ave: 0 });
// stateave.push(mp);

// let bv = bvdata.reduce((acc, curr, idx) => {
//     let newave = ((acc.ave * acc.pop) + curr.age) / ((acc.pop + 1));
//     return { pop: acc.pop + 1, ave: newave };
// }, { pop: 0, ave: 0 });
// stateave.push(bv);

// console.log(r);

// state1ave = 30;
// state1pop = 2;
// state2ave = 60;
// state2pop = 7;

// let i = 30 + 30 + 60 + 60 + 60 + 60 + 60 + 60 + 60;
// let ave = i/9;

// console.log(ave);

// let avenew = ((state1ave*state1pop) + (state2ave*state2pop)) / (state1pop + state2pop);
// console.log(avenew);