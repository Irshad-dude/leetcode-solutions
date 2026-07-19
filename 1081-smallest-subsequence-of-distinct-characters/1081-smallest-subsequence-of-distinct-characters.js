/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
     let map = new Map(),arr =[];
    let visted = new Set();
    for(let i =0; i< s.length;i++){
        map.set(s[i],i)
    }
    for(let i=0;i<s.length;i++){
        if(visted.has(s[i])) continue;
        while(arr.length && arr[arr.length-1] > s[i] && map.get(arr[arr.length-1]) > i){
            visted.delete(arr.pop())
        }
        arr.push(s[i])
        visted.add(s[i])  
    }
    return arr.join("");
};
