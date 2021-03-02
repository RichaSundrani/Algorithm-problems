// count the character in a string -- 

// let input = "Your PIN number is 12345"; 
let input = "Richard Parker is awesome"; 
const charCounter = (str) => {
    str = str.toLowerCase().split(' ').join();
    console.log(str);
    // create object to store value 
    let charCount = new Map();
    // loop over the string foro each character
    for (let i = 0; i < str.length; i++) {
        if (str[i] in charCount) {
            charCount[str[i]] += 1;
        } else {
            charCount[str[i]] = 1;
        }
    }
    // return final object 
    return charCount;
};

console.log(charCounter(input));
console.log("");