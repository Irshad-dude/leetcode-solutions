/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let mn = Infinity
  let mx = 0
  for(let price of prices){
    mn = Math.min(mn,price)
    mx = Math.max(mx,price-mn)
  }
  return mx
};