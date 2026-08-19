/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map()
    map.set(0,-1);
    let sum = 0;
    let ans = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0)sum--;
        else sum++;
        if (map.has(sum))ans = Math.max(ans, i - map.get(sum));
        else map.set(sum, i);
    }
    return ans
};