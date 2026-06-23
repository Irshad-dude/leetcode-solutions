/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set(s)
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < set.size + i; j++) {
            let set1 = new Set(s.slice(i, j + 1))
            if(set1.size == set.size){
             return set.size}
            if(j-i+1 == set1.size){
                ans = Math.max(ans,j-i+1)
            }
        }
    }
    return ans
};