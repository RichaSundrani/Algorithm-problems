

let input = [15, 10, 8, 12, 20, 18, 25];
let getSumCombinations = (targetSum, numbers ) => {
 
};

console.log(getSumCombinations(33, input));
console.log("");
















//KDG 
// let getSumCombinations = (targetSum, numbers, depth = 0) => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === targetSum) {
//             console.log(`Done ${numbers[i]}`);
//             return numbers[i];
//         } else if (numbers[i] < targetSum) {
//             let remainder = targetSum - numbers[i];
//             let lastNum = getSumCombinations(remainder, numbers, depth+1);
//             if (lastNum) {
//                 console.log(`Done ${numbers[i]}`);
//                 if (depth == 0) {
//                     console.log('Set found');
//                 } else {
//                     return numbers[i];
//                 }
//             }
//         }
//     }
// };



//// Horrible 
// let results = [];
//     let temp = [];
//     if (numbers.includes(targetSum)) {
//         results.push(targetSum);
//     }
//     numbers.forEach(num => {
//         temp.push(num);
//         let remainder = targetSum - num;
//         for (let i = 0; i < numbers.length; i++) {
//             if (numbers[i] === remainder) {
//                 temp.push(numbers[i]);
//                 results.push(temp);
//                 temp = [];
//             }
//             if (numbers[i] < remainder) {
//                 remainder = remainder - numbers[i]; 
//                 temp.push(numbers[i]); 
//             }
//            console.log(temp);
//         }
//     });
