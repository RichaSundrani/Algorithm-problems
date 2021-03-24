let input = ["RGRGRGRG", "GLGLGLGL", "GLGRG"];

const doesCircleExists = (commands) => {
    for (command of commands) {
        let dir = 0;
        let x = 0;
        let y = 0;
        let DX = [0, 1, 0, -1];
        let DY = [1, 0, -1, 0];
        for (let i = 0; i < command.length; i++) {
            if (command[i] === "R") {
                dir = dir + 90;
                if (dir >= 360) {
                    dir = dir - 360;
                }
            }
            if (command[i] === "L") {
                dir = dir - 90;
                if (dir < 0) {
                    dir = 360 + dir;
                }
            }
            if (command[i] === "G") {
                x = x + DX[dir / 90];
                y = y + DY[dir / 90];
            }
            console.log(command[i], x, y);
        }
        if (dir !== 0 || (x === 0 && y === 0) ) {
            console.log("Yes circle");
        } else {
            console.log("Nope");
        }
    }

}
doesCircleExists(input);



// 0 (North) => x = 0 , y = 1
// 90 (East) => x = 1 , y = 0
// 180 (South) => x = 0 , y = -1
// 270 (West) => x = -1, y = 0











   // N 0 -> 0 => dx = 0, dy = +1
    // E 1 -> 90 => dx = +1, dy = 0
    // S 2 -> 180 => dx = 0, dy = -1
    // W 3 -> 270=> dx = -1, dy = 0
// if (command === "G") {
//     switch (dir) {
//         case 90:
//             x = x + 1;
//             break;
//         case 180:
//             y = y - 1;
//             break;
//         case 270:
//             x = x - 1;
//             break;
//         case 0:
//             y = y + 1;
//         default:
//             break;
//     }
// }

// ["RGRGRGRG", "GLGLGLGL"];
// some("GLGLGLGLRG");

function some(commands) {
 let dir = 0;
let x = 0;
let y = 0;
let DX = [0, 1, 0, -1];
let DY = [1, 0, -1, 0];
    for(let i=0; i<commands.length; i++){
        if (commands[i] === "R") {
            dir = dir + 90;
            if (dir >= 360) {
                dir = dir - 360;
            }
        }
        if (commands[i] === "L") {
            dir = dir - 90;
            if (dir < 0) {
                dir = 360 + dir;
            }
        }
    
        if (commands[i] === "G") {
            x = x + DX[dir / 90];
            y = y + DY[dir / 90]; 
        }
        console.log(dir, x, y);
    }
    
    if (dir !== 0 || (x === 0 && y === 0)) {
        console.log("YES");
    } else {
        console.log("NO")
    }
}