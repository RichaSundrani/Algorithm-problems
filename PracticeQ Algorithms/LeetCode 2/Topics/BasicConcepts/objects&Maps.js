// unordered key-value pair 
// for in loop is to iterate the object 
// duplicate property name will be overwritten with last value 
// objects can contain methods



// unlike objects in the Map key-value pairs are ordered 
// unlike objects maps are iterable 
// reference values like arrays can be used as key unlike in objects they cant
// object can be a key in map 

let firstMap = new Map();
firstMap.set("fName", "Richa");

const country = {
    name: "USA",
    population: 30000000
}

firstMap.set(country, 444);

console.log(firstMap);
console.log(firstMap.get('fName'));

firstMap.delete(country);
console.log(firstMap);