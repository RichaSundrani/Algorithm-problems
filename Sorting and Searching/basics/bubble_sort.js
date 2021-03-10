// ######## Simple sort using array sort method

// function numCompare(num1, num2) {
//     return num2 - num1;
// };

// console.log([6, 4, 15, 10].sort(numCompare));

// function strCompare (str1, str2){
//     return str2.length - str1.length;
// }; 

// console.log(["Hi", "Hello", "Richard"].sort(strCompare));

function bubbleSort(arr) {
    let noSwap = true; 
    for (let i = arr.length; i > 0 ; i--) {
        noSwap = true; 
        for (let j = 0; j < i -1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j +1]) {
                // Swap the values 
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwap = false; 
            }
        }
        if(noSwap) break;
    }
    return arr;
};

console.log(bubbleSort([2, 5, 3, 1, 8, 7]));
