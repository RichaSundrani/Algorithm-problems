// Sort the random colors based on VIBGYOR

let toSort = ["Red", "Orange", "Blue", "Yellow", "Red", "Violet"];
let sortOrder = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

var vibgyorSort = function (a, b) {
    let aIndex = sortOrder.indexOf(a);
    let bIndex = sortOrder.indexOf(b);
    if (aIndex > bIndex) {
        return 1;
    } else if (aIndex == bIndex) {
        return 0;
    } else {
        return -1;
    }
};

// Orange , Red, Blue, Yellow, Red, Violet
// Orange , Blue, Red, Yellow, Red, Violet
// Orange , Blue, Yellow, Red, Red, Violet
// Orange , Blue, Yellow, Red, Red, Violet
// Orange , Blue, Yellow, Red, Violet, Red  // 

// Blue, Orange, Yellow, Red, Violet, Red
// Blue, Yellow, Orange, Red, Violet, Red
// Blue, Yellow, Orange, Red, Violet, Red
// Blue, Yellow, Orange, Violet, Red, Red  // 

// Blue, Yellow, Orange, Violet, Red, Red 
// Blue, Yellow, Orange, Violet, Red, Red 
// Blue, Yellow, Violet, Orange, Red, Red  //

// Blue, Yellow, Violet, Orange, Red, Red 
// Blue, Violet, Yellow, Orange, Red, Red  //

// Violet, Blue, Yellow, Orange, Red, Red  
var mySort = async function(sortArr){
    for(let j=0; j<sortArr.length -1; j++) {
        console.log("Iteration " +j );
        for(let i=0; i<sortArr.length-1-j; i++){
            if(vibgyorSort(sortArr[i],sortArr[i+1]) === 1){
               let temp = sortArr[i+1];
               sortArr[i+1] = sortArr[i];
               sortArr[i] = temp;
            } 
            console.log(JSON.stringify(sortArr));
        }
    }
    return sortArr;
}

async function main() {
    console.log("Final: " + await mySort(toSort));
}
main()

// console.log(vibgyorSort( "Orange", "Red"));

// console.log(toSort.sort(vibgyorSort));
