// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var matchFound = false;
    var currentIndex = 0;
    while (!matchFound && currentIndex < nums.length) {
        for (i = currentIndex+1 ; i < nums.length ; i++) {
            var num1 = nums[currentIndex];
            var num2 = nums[i];
            if (parseInt(num1) + parseInt(num2) == target) {
                matchFound = true;
                break;
            }

        }
        if (!matchFound) {
            currentIndex++;
        }
    }
        return [currentIndex, i];
};
