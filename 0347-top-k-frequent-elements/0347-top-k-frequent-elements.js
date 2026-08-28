/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let ans = []
    let i = 0;
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }
    let arr = [...map].sort((a, b) => b[1] - a[1]);
    while(i < k){
        ans.push(arr[i][0])
        i++
    }
    return ans
};