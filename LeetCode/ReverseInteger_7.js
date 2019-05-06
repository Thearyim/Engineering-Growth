// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output: 321
//
// Example 2:
// Input: -123
// Output: -321
//
// Example 3:
// Input: 120
// Output: 21
// Note: Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = 0;
    var num = parseInt(x);
    var isNegative = num < 0;
    if (isNegative) {
        num = num * -1;
    }

    while (num > 0) {
        var numTens = parseInt(num % 10)
        var revTens = (rev * 10)
        rev = numTens + revTens;

        if (rev > 2147483648 || rev < -2147483647) {
            rev = 0;
            break;
        }

        if (numTens !== rev - revTens || revTens !== rev - numTens) {
            rev = 0;
            break;
        }

        num = parseInt(num / 10);
    }

    if (isNegative) {
        rev = rev * -1;
    }
    return rev;
};
