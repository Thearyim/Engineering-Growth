// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
//   Input: ["flower","flow","flight"]
//   Output: "fl"
// Example 2:
//   Input: ["dog","racecar","car"]
//   Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = "";
    let done = false;
    let charIndex = 0;
    if (strs.length > 0){
        while (!done){
            if (strs[0] == ""){
                break;
            }
            if (strs.length == 1) {
                commonPrefix = strs[0];
                done = true;
                continue;
            }
            if (charIndex >= strs[0].length){
                done = true;
                continue;
            }
            let currentChar = strs[0][charIndex];
            for (let i = 1; i < strs.length; i++){
                if (strs[i] == "" || strs[i][charIndex] !== currentChar) {
                    done = true;
                    break;
                }
            }
            if (!done){
                commonPrefix+=currentChar;
            }
        charIndex++;
     }
    }
    return commonPrefix;
};
