/**
@param {string} digits
@return {string[]}
*/
var letterCombinations = function(digits) {
    if(!digits){
    return [];
    }
    var len = digits.length;
    var map = new Map();
    map.set('2','abc');map.set('3','def');map.set('4','ghi');map.set('5','jkl');map.set('6','mno');map.set('7','pqrs');map.set('8','tuv');map.set('9','wxyz');
    var res = [];
    
    function _generate(i,str){
    // terminator
    if(i == len){
    res.push(str);
    return;
    }
    // process
    // drill down
    var tmp = map.get(digits[i]);
    for(var r=0;r<tmp.length; r++){
    _generate(i+1,str+tmp[r]);
    }
    }
    _generate(0,'');
    return res;
    };

    console.log(letterCombinations('2345'));