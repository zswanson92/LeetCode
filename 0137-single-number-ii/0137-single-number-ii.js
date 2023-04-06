/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b)
    // console.log(nums)
    for(let i = 0; i < nums.length; i += 3){
        // console.log(abc[i])
        // console.log(abc[i + 2])
        // console.log("THIS IS I", i)
        if(nums[i] !== nums[i + 2]){
            return nums[i]
        }
    }
};