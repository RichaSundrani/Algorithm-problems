/*
Non-Repeating Element
Difficulty Level : Easy
Last Updated : 16 Apr, 2020
Find the first non-repeating element in a given array of integers.
Examples:
Input : -1 2 -1 3 2
Output : 3
Explanation : The first number that does not 
repeat is : 3
Input : 9 4 9 6 7 4
Output : 6

An Efficient Solution is to use hashing.
1) Traverse array and insert elements and their counts in hash table.
2) Traverse array again and print first element with count equals to 1
*/

function firstUnique (arr) {
   for(let i=0; i<arr.length; i++) {
    let left = arr.slice(0, i); 
    let right = arr.slice(i, arr.length); 
    if( left.includes(arr[i])  !== right.includes(arr[i])) {
        console.log(arr[i]);
        return arr[i]
     }
   }
   return null; 
}; 

console.log(firstUnique([ 9, 4, 9, 6, 7, 4])); 

