/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumEven=0,sumOdd=0;
    for(let i = 0; i <2*n; i++){
        if(i%2 == 0){
            sumEven += i;
        }
        else {
            sumOdd += i;
        }
    }
    return Math.abs(sumEven-sumOdd)
};