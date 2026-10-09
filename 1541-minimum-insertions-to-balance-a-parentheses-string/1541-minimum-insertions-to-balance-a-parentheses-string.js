/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let result = 0;
    let count = 0;
    for(let i= 0; i < s.length; i++){
        if(s[i] === "(")count++
        else {
            if(count > 0)count--;
            else result++;
            if(s[i+1] === ")")i++;
            else result++;
        }
    }
    if(count != 0)result += 2*count;
    return result
};