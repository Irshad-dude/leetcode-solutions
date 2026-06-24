/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    len = nums.length 
    let sum = 0;
    for(let i = 0; i < len; i += 2){
        sum +=nums[i]
    }
    return sum
    };