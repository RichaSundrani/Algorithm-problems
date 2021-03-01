

// Simple loop
let addUpTo1 = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total = total + i;
    }
    return total;
};

console.log(addUpTo1(10));

// Simple recurssion
let addUpTo2 = (n) => {
    if (n === 1) {
        return 1;
    }
    return n + addUpTo2(n - 1);
}

console.log(addUpTo2(10));

let addUpTo3 = (n) => {
    return n * (n + 1) / 2;
}

console.log(addUpTo3(10)); 

console.log(performance.now());
