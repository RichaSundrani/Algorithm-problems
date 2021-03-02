// duplicate items are not allowed unlike arrays 
// insertion order is not stored unlike arrays 
// deleting and finding elements are faster in set compared to arrays 
// same as arrays sets are iterable and the size is dynamic based on number of items 

let mySet = new Set(["kdg", "Nimmu"]);
mySet.add("Richa");
mySet.add("abc");
mySet.add(123);


// undefined
console.log(mySet[1]);

// returns true
console.log(mySet.has('Richa'));

// returns an object with all values
console.log(mySet);