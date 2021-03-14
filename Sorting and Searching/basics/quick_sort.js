
// Time complexity O(log n)
// Space complexity O(log n)

var input = [4, 8, 9, 2, 1, 5, 7, 6, 3];

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // Left 
        quickSort(arr, left, pivotIndex - 1);
        // Right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
            console.log(arr, arr[swapIndex], arr[i]);
        }
    }
    swap(arr, start, swapIndex);
    console.log(arr, arr[start], arr[swapIndex]);
    return swapIndex;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


console.log(quickSort(input));