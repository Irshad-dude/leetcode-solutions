/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);

    let ans = [];

    function dfs(index, path) {
        ans.push([...path]);
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue;

            path.push(nums[i]);
            dfs(i + 1, path);
            path.pop();
        }
    }
    dfs(0, []);
    return ans;
};