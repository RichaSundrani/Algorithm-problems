let commands = ["RGRGRGRG", "GLGLGLGLRG",  "GLGRG"];
 
const doesCircleExists = (commands) => {
   // Direction: N=0, E=1, S=2, W=3
   const DX = [0, 1, 0, -1], DY = [1, 0, -1, 0];
   let result = [];
 
   if (commands.length > 10) { // Checking for boundary condition of too many command sequence to check
       result.push("TOO MANY ITEMS TO CHECK");
   } else {
       for (let i = 0; i < commands.length; i++) {
           console.log(commands[i]);
           if (commands[i].length > 2500) { // Checking for boundary condition of too many commands to check
               result.push("TOO MANY COMMANDS TO CHECK");
           } else {
               // Assuming north facing with coordinate 0, 0
               let dx = 0, dy = 0, dir = 0;
               for (let j = 0; j < commands[i].length; j++) {
                   console.log(commands[i][j]);
                   if (commands[i][j] === "L") {
                       if (dir === 0) {
                           dir = 3;
                       } else {
                           dir = dir - 1;
                       }
                   } else if (commands[i][j] === "R") {
                       if (dir === 3) {
                           dir = 0;
                       } else {
                           dir = dir + 1
                       }
                   } else {
                       dx += DX[dir];
                       dy += DY[dir];
                   }
               }
               if (dir !== 0 || (dx === 0 && dy === 0)) {
                   result.push("YES")
                   console.log("YES");
               } else {
                   result.push("NO");
                   console.log("NO")
               }
           }
       }
   }
   return result;
}
 
let output = doesCircleExists(commands);
console.log(output);
console.log('Done');