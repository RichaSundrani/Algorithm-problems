


const validAnagram = (str1, str2) => {
    const first = str1.split('').sort().join('');
    const second = str2.split('').sort().join('');
    if(first == second){
        return true;
    } else {
        return false;
    }
};

console.log(validAnagram("car", "cat"));
console.log(" ");