/* ________________________________________CHALLENGE 1: ADD ALL NUMBERS _______________________________________ */
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// Solution 1: ES5 arguments & for loop
let addAll = (...args) => {
    // let args = Array.prototype.slice.call(arguments);
    // let args = Array.from(arguments);



    // OR 
    // return args.reduce((total, arg) => total + arg, 0); 

};
// console.log(addAll(1, 2, 3, 4, 5, 10));

/* ________________________________________CHALLENGE 2: SUM ALL PRIMES_______________________________________ */
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17


let sumAllPrime = (num) => {
    let total = 0;
    let primes = [];
    function checkForPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i <= num; i++) {
        if (checkForPrime(i)) {
            total += i;
            primes.push(i);
        }
    }
    return total;
}
// console.log(sumAllPrime(10));

/* ________________________________________CHALLENGE 3: SEEK & DESTROY_______________________________________ */
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

let seekAndDestroy = (arr1, ...rest) => {
    // const [arr1, ...args] = arr;
    // console.log(arr1);
    return arr1.filter(val => !rest.includes(val));
}
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'));
