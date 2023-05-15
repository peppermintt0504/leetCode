/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let count = 1;
    let temp = head;
    let changeVal = 0;
    let changeVal2 = 0;

    let nodeLength = 0;
    while(1){
        if(count === k){
            changeVal = temp.val;
        }
        count++;
        if(temp.next)
            temp = temp.next;
        else
            break;
    }
    nodeLength = count-1;
    count = 1;
    
    
    temp = head;
    for(let i = 1; i <= nodeLength - k; i++){
        temp = temp.next;
    }

    changeVal2 = temp.val;
    temp.val = changeVal;
    
    
    temp = head;
    for(let i = 1; i < k; i++){
        temp = temp.next;
    }
    temp.val= changeVal2;

    return head;
};