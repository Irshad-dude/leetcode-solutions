/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let store = [];
    let temp = head;
    let min = Infinity
    let arr = []
    let len = 0;
    while(temp != null){
        arr.push(temp.val)
        temp = temp.next;
        len++
    }
    for(let i = 1; i < len -1; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1])store.push(i);
        else if(arr[i] < arr[i-1] && arr[i] < arr[i+1])store.push(i);
       
    }
    if(store.length < 2)return [-1,-1]
    for(let i = 0; i < store.length-1; i++){
         min = Math.min(min,store[i+1] - store[i])
    }
    let max = store[store.length - 1] - store[0];
    return [min,max]
};