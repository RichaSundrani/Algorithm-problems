// Largest Divisor for each element in an array other than 1 and the number itself
// Given an array arr[] of N integers, the task is to find the largest divisor for each element in an array other than 1 and the number itself. 
// If there is no such divisor, print -1.
// Input: arr[] = {5, 6, 7, 8, 9, 10} Output: -1 3 -1 4 3 5

let input = [15, 16, 17, 18, 19, 20, 21];
const greatestDivisor = (numbers) =>{
    numbers.forEach(num => {
        if(num%2 === 0 && num > 2){
            console.log(`Divisor of ${num} : ${num/2}` )
        } else{
            for(let i = num-2; i>2; i--){
                if(num%i === 0){
                    console.log(`Divisor of ${num} : ${i}` ); 
                    return; 
                }
            }
            console.log(`Divisor of ${num} : -1` );
        }
    });
    return null;
}; 

console.log(greatestDivisor(input)); 
console.log("Break"); 


