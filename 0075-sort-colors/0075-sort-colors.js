/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero = []
    let one = []
    let two = []
    
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] === 0){
            zero.push(nums[i])
        }
        if(nums[i] === 1){
            one.push(nums[i])
        }
        if(nums[i] === 2){
            two.push(nums[i])
        }
    }
    let abc = [...zero, ...one, ...two]
    for(let j = 0; j < abc.length ; j++){
        nums[j] = abc[j]
    }
    
    return nums
};