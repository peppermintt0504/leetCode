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
 * @return {boolean}
 */


var treeDepth = [];

var isCompleteTree = function(root) {
    treeDepth = [];
    checkTree(root);

    const checkFull = treeDepth.reduce((x,v,i)=>{
        if(i === treeDepth.length - 1 || i === treeDepth.length - 2)return x
        const countNull = v.indexOf(null);
        if(countNull !== -1)    return false
        return x;
    },true)
    if(!checkFull)  return false

    const lastDepth = treeDepth[treeDepth.length - 2];
    const nullIndex = lastDepth.indexOf(null);
    if(nullIndex === -1){
        return true
    }
    const result = lastDepth.reduce((x,v,i)=>{
        if(v !== null && i>nullIndex){
            return false;
        }
        return x;
    },true)
    return result
};

var checkTree = (tree) => {
    let h = 0;
    const queue = [[tree,h]];
    
    while(queue.length){
        const tempTree = queue.shift();
        const thisHight = tempTree[1];
        if(treeDepth[thisHight]){
            treeDepth[thisHight].unshift(tempTree[0]?.val ?? null)
        }else{
            treeDepth.push([tempTree[0]?.val ?? null])
        }
        if(tempTree[0]?.val){
            queue.push([tempTree[0].right,thisHight+1]);
            queue.push([tempTree[0].left,thisHight+1]);
        }
    }
}