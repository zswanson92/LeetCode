/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let counter = 0
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === 0){
            for(let k = i; k < i + counter; k++){
                [nums[k], nums[k + 1]] = [nums[k + 1], nums[k]]
            }
        } else {
            counter++
        }
    }
};