
function getNumberOfOptions(priceOfJeans, priceOfShoes, priceOfSkirts, priceOfTops, dollars) {
    let shoppingOptions = [];
    let temp = [];
    for (let i = 0; i < priceOfJeans.length; i++) {
        for (let j = 0; j < priceOfShoes.length; j++) {
            for (let k = 0; k < priceOfSkirts.length; k++) {
                for (let l = 0; l < priceOfTops.length; l++) {
                    if (priceOfJeans[i] + priceOfShoes[j] + priceOfSkirts[k] + priceOfTops[l]  <= dollars) {
                        temp = [priceOfJeans[i], priceOfShoes[j], priceOfSkirts[k], priceOfTops[l]];
                        if (!shoppingOptions.includes(temp)) {
                            shoppingOptions.push(temp);
                        }
                    }
                }
            }
        }
    }
  
    return shoppingOptions.length;
 }
 console.log(getNumberOfOptions([2, 3], [4], [2, 3], [1, 2], 10));