/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return nums
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1] && nums[i] !== '_'){
            console.log(nums)
            nums.push('_')
            nums.splice(i, 1)
            i--
        }
    }
    

    console.log(nums)
    // [0,0,1,1,1,2,2,3,3,4]
    console.log(nums.includes('_'))
    if(nums.includes('_') === false){
       return nums.length
    } 
    else return nums.slice(0, nums.indexOf('_')).length 
};