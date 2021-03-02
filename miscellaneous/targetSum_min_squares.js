// Minimum number of squares whose sum equals to given number n
// A number can always be represented as a sum of squares of other numbers. 
// Note that 1 is a square and we can always break a number as (1*1 + 1*1 + 1*1 + …). 
// Given a number n, find the minimum number of squares that sum to X.


const minSqaures = (num, result = []) => {
    if (num <= 2) {
        return 1;
    }
    const square = isPerfectSquare(num);
    if (square !== null) {
        return square;
    } else {
        for (let i = num - 1; i > 1; i--) {
            const sqr = isPerfectSquare(i);
            if (sqr !== null) {
                result.push(sqr);
                // minSqaures(num - i, result);
            }
        }
        return result;
    }
}

const isPerfectSquare = (num) => {
    if ((num % (Math.round(Math.sqrt(num)))) === 0) {
        return Math.sqrt(num);
    } else {
        return null;
    }
}

// console.log(Math.sqrt(0));
// console.log(Number((0 % (Math.round(Math.sqrt(0))))));

// console.log(minSqaures(0));
console.log(minSqaures(18));
console.log("break");
