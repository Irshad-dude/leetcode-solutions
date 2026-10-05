/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let count = 0;
    let result = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            count++
        }
        else {
            count--
            if (s[i - 1] === "(") {
            result += Math.pow(2, count);
            }
        }
        
    }
    return result
};