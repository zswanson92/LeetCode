/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let arrOne = [p]
    let arrTwo = [q]
    
    let abc = []
    let xyz = []
    
    while(arrOne.length || arrTwo.length){
        const node = arrOne.shift()
        const nodeTwo = arrTwo.shift()
        
        abc.push(node?.val)
        xyz.push(nodeTwo?.val)
        
        if(node?.left || nodeTwo?.left){
            arrOne.push(node?.left) 
            arrTwo.push(nodeTwo?.left)
        } 
        
        if(node?.right || nodeTwo?.right){
            arrOne.push(node?.right) 
            arrTwo.push(nodeTwo?.right)
        } 
        
    }
    console.log(abc)
    console.log(xyz)

    for(let i = 0; i < abc.length; i++){
        if(abc[i] !== xyz[i]){
            return false
        }
    }

    return true    
};