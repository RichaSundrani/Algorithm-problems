
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log(arr, currentVal, arr[j], arr[j + 1]);
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2, 1, 4, 9, 3, 11, 7]));