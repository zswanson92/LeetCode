/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.includes(target)) return [-1, -1]
    if(nums.length === 1) return [0, 0]
    let i = 0
    let j = nums.length - 1
    let arr = []
    
    while (i <= j){
        
        if(nums[i] === target){
            arr.push(i)
            // if(arr.length === 2){
            // break
            // }
            i++
        } 
        if(nums[j] === target){
            arr.push(j)
            // if(arr.length === 2){
            // break
            // }
            j--
        } else if (nums[j] !== target && nums[i] !== target){
            i++
            j--
        }    
        console.log(arr)
        console.log("I",i)
        console.log("J", j)
    }
    
    if(arr.length === 1){
        arr.push(arr[0])
    }
    
    arr.sort((a, b) => a - b)
    
    return [arr[0], arr[arr.length - 1]]
};