/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let arr = [...score];
    let ans = []
    score.sort((a,b) => b-a)
    let obj = {};
    for(let i = 0; i < score.length; i++) {
    if(i === 0) obj[score[i]] = "Gold Medal";
    else if(i === 1) obj[score[i]] = "Silver Medal";
    else if(i === 2) obj[score[i]] = "Bronze Medal";
    else obj[score[i]] = (i + 1).toString();
    }
    for(let ch of arr){
        ans.push(obj[ch])
    }
    return ans
};