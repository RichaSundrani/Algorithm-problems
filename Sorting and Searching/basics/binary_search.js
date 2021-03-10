let input = [2, 5, 6, 9, 13, 15, 28, 30];

let binarySearch = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    // This is If condition is for sorted array only
    // if((num > arr[arr.length -1] )|| (num < arr[0])) {
    //     return -1;
    // }
    while ((arr[middle] !== num) && (start !== end)) {
        console.log(start, middle, end);
        if (num < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === num) {
        return middle;
    } else {
        return -1;
    }
};

console.log(binarySearch(input, 28));
