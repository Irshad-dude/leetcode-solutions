/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let k = 0;
    let ans = 0
    for(let num of nums){
        if(num == 1) k++;
        else k = 0;
        ans  = Math.max(ans,k)
    }
    return ans
};