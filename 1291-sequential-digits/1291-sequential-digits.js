/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let arr = [];
    function sque(len) {
        if (len > high.toString().length) return;
        for (let start = 1; start <= 10 - len; start++) {
            let val = 0;
            let digit = start;
            for (let j = 0; j < len; j++) {
                val = val * 10 + digit;
                digit++;
            }
            if (val >= low && val <= high) {
                arr.push(val);
            }
        }
        sque(len + 1);
    }
    sque(low.toString().length);
    return arr;
};