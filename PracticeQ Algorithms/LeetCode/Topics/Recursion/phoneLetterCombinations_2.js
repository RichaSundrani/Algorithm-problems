/**
 * https://codereview.stackexchange.com/questions/221976/find-all-letter-combinations-of-a-phone-number  -- solutions
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') { return []; }
  
    const strDigits = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
  
    const combine = (cur, n) => cur.length === digits.length 
      ? cur
      : [...strDigits[digits[n]]].flatMap(x => combine(cur + x, n + 1));
    return combine('', 0);
  };

  console.log(letterCombinations('23'));