/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    let len = arr.length-1
    arr.sort((a,b) =>  a-b);
    arr[0] = 1;
    for (let i = 0; i < len ; i++){
        let diff = arr[i+1] - arr[i];
        if(diff > 1)arr[i+1] = arr[i] +1;
     }
     return arr[len]
};