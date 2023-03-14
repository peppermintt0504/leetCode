/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var list = []
var sumNumbers = function(root) {
    list = []
    makeNum(root,root.val)
    return list.reduce((x,v)=>x+v,0);
};
var makeNum = (tree,num) =>{
    let tempRight = num;
    let tempLeft = num;
    if(tree.right){
        tempRight = 10*tempRight + tree.right.val;
        makeNum(tree.right,tempRight);
    }
    if(tree.left){
        tempLeft = 10*tempLeft + tree.left.val;
        makeNum(tree.left,tempLeft);
    }
    if(!tree.right && !tree.left){
        list.push(tempLeft);
    }
}