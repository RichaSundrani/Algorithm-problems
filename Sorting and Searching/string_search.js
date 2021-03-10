
let input = "javascript is awesome, it is liked by programmers";
function stringSearch(str, term) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < term.length; j++) {
            if(term[j] !== str[i+j]){
                console.log("Not match!")
                break; 
            }
            if(j == term.length -1){
                console.log("Found a match!"); 
                count++;
            }
        }
    }
    return count; 
}

console.log(stringSearch(input, "is"));