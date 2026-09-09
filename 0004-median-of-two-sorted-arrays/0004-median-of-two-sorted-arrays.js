/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    for(let num of nums2){
        nums1.push(num)
    }
    nums1.sort((a,b) => a-b)
    let mid = Math.floor(nums1.length / 2)
    if(nums1.length % 2 === 0)return  (nums1[mid] + nums1[mid-1] )/ 2
    else return nums1[mid]
};