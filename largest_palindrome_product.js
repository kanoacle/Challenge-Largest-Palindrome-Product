module.exports = function(digits){
  var maxDigit = Math.pow(10, digits);
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  function palindromeCheck (number) {
    number = number.toString();
    var reverseNum = number.split("").reverse().join("");
    if (number === reverseNum) {
      return true;
    } else {
      return false;
    }
  }

  for (var x = maxDigit / 10; x < maxDigit; x++) {
      for (var y = maxDigit / 10; y < maxDigit; y++) {
        if (palindromeCheck(x * y) === true) {
          if (x * y > palindromeNumber) {
            factor_0 = x;
            factor_1 = y;
            palindromeNumber = factor_0 * factor_1;
          }
        }
      }
    }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};