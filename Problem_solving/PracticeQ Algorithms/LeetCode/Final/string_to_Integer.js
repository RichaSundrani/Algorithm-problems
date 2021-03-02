
var input = "words and 987";
var myAtoi = function (s) {
    var INT_MAX = 2147483647;
    var INT_MIN = - INT_MAX - 1;
    if (isNaN(parseInt(s))) {
        return 0;
    } if (parseInt(s) > INT_MAX) {
        return INT_MAX;
    }
    if (parseInt(s) > INT_MAX + 1) {
        return INT_MIN;
    }
    else {
        return parseInt(s);
    }
};

console.log(myAtoi(input));

