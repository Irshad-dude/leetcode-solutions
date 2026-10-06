/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let stack = []
  let result = 0;
  let count = 0;
  for(let ch of s){
    if(ch === "("){
        stack.push(ch)
    }
    else if (ch === ")" && stack.length === 0){
        count++
    }
    else {
        stack.pop()
    }
  }
  result = stack.length + count
  return result
};