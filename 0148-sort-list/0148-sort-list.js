/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head) return head
    
    let arr = []
    
    let copy = head
    while(copy){
        arr.push(copy.val)
        copy = copy.next
    }
    
    arr.sort((a, b) => a - b)
    let abc = new ListNode(arr[0])
    let curr = abc
    let i = 1;
    while(i < arr.length){
        curr.next = new ListNode(arr[i])
        curr = curr.next

        
        i++
    }
    curr.next = null
    
    return abc

};