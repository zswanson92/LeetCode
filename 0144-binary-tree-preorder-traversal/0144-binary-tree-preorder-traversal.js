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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return []
    let arr = []
    const q = []
    q.push(root)
    
    while(q.length > 0){
        let node = q.pop()
        arr.push(node.val)
        if(node.right)q.push(node.right)
        if(node.left)q.push(node.left)
        
    }
    return arr
};