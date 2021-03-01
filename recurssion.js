// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89----- 100
// 1, 2, 3, 4, 5, 6, 7,  8,  9,  10

// let fibonacci = (maxVal, results = [0, 1]) => {
//     // let n3 = n1 + n2;
//     let n1 = results[results.length - 2];
//     let n2 = results[results.length - 1];
//     if (n1 + n2 > maxVal) {
//         return;
//     } else {
//         console.log(n1 + n2);
//         results.push(n1 + n2);
//         fibonacci(maxVal, n2, n1 + n2, results);
//     }
//     return results;
// };

// console.log(fibonacci(100));


// x to the power n 
// x = 2, n = 3 
// 2 * 2 * 2 = 8 , n == 0 
// let toPower = (x, n) => {
//     if (n === 1) {
//         return x;
//     }
//     return x * toPower(x, n-1)
// }; 

// console.log(toPower(3, 3))
let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: {
            name: 'Jack',
            salary: 1300
        }
    }
};

// let totalSalary = (comp, total = 0) => {
//     if (Array.isArray(comp)) {
//        return total + comp.reduce((acc, element)=>{
//             return acc + element.salary;
//         }, 0);
//     } else {
//         for(dept in comp){
//           let currentTotal = totalSalary(comp[dept], total);
//           total = currentTotal;
//         }
//     }
//     return total;
// }


// let totalSalary = (comp, total = 0) => {
//     if (comp.name && comp.salary) {
//         total = total + comp.salary;
//         console.log(comp.name + " --- " + total);
//         return total;
//     }
//     for (let dept in comp) {
//             const lastSalary = totalSalary(comp[dept], total);
//             if(lastSalary){
//                 total = lastSalary;
//             }
//     }
//     return total
// }

console.log(totalSalary(company));



