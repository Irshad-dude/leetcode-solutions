/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let add = 0;
        let rem = 0
        while(num > 0){
            rem = num % 10;
            add += rem;
            num = Math.floor(num/10)
            if(add > i)break;
        }  
        if(add == i)return i;
    }
    return -1
};