/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = []
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] % 2 === 0){
            arr.push(nums[i])
        }
    }
    for(let k = 0; k < nums.length; k++){
        if(nums[k] % 2 !== 0){
            arr.push(nums[k])
        }
    }
    
    return arr
};