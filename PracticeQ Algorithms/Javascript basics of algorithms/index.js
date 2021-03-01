// let shopping = (jeans, shoes, skirt, tops, dollars) => {
//     let shoppingOptions = [];
//     let remainMoney = 0;
//     let result = 0;
//     if (dollars > Math.min(...shoes)) {
//         remainMoney = dollars - Math.min(...shoes);
//     }
//     for (let i = 0; i < jeans.length; i++) {
//         let temp = [];
//         for (let j = 0; j < skirt.length; j++) {
//             for (let k = 0; k < tops.length; k++) {
//                 if ((jeans[i] + skirt[j] + tops[k]) === remainMoney) {
//                     temp = [jeans[i], skirt[j], tops[k]];
//                     shoppingOptions.push(temp);
//                     result++;
//                 }
//             }
//         }
//     }
//     console.log(shoppingOptions);
//     return result
// }

function getNumberOfOptions(priceOfJeans, priceOfShoes, priceOfSkirts, priceOfTops, dollars) {
    let shoppingOptions = [];
    let result = 0;

    for (let i = 0; i < priceOfJeans.length; i++) {
        let temp = [];
        // for(let j=0; j<priceOfShoes.length; j++){
        for (let k = 0; k < priceOfSkirts.length; k++) {
            for (let l = 0; l < priceOfTops.length; l++) {
                if (priceOfJeans[i] + priceOfSkirts[k] + priceOfTops[l] <= 6) {
                    temp = [priceOfJeans[i], priceOfSkirts[k], priceOfTops[l]];
                    if (!shoppingOptions.includes(temp)) {
                        shoppingOptions.push(temp);
                    }
                }
            }
        }
        // }
    }

    return shoppingOptions.length;
}
console.log(getNumberOfOptions([2, 3], [4], [2, 3], [1, 2], 10));
console.log(getNumberOfOptions([1, 4], [3], [3, 4], [1, 3], 10));

// var threeSum = function (array) {
//     array.sort((a, b) => a - b);
//     const triplets = [];
//     for (let i = 0; i < array.length - 2; i++) {
//         if (array[i] != array[i - 1]) { // making sure our solution set does not contain duplicate triplets
//             let left = i + 1;
//             let right = array.length - 1;
//             while (left < right) {
//                 const currentSum = array[i] + array[left] + array[right];
//                 if (currentSum === 0) {
//                     triplets.push([array[i], array[left], array[right]]);
//                     while (array[left] == array[left + 1]) left++
//                     while (array[right] == array[right - 1]) right-- // making sure our solution set does not contain duplicate triplets
//                     left++;
//                     right--;
//                 } else if (currentSum < 0) {
//                     left++
//                 } else if (currentSum > 0) {
//                     right--
//                 }
//             }
//         }
//     }
//     return triplets
// };
// let array = [[2, 3], [2, 3], [1, 2]];

// console.log(getCombinations(array));