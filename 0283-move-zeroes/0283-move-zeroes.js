/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
    let arr = [];

    for (let num of nums) {
        if (num !== 0) arr.push(num);
    }

    let n = nums.length - arr.length;
    arr.push(...Array(n).fill(0));

    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
};