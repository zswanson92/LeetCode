/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    if(!nums.includes(0)) return 0
    
    let occur = 0;
    let zeroCount = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            zeroCount++
        } 
        if((nums[i] !== 0) || (i === nums.length - 1)) {
            for(let j = zeroCount; j > 0; j--){
                occur += j
                zeroCount = 0
            }
        }
    }
    
    return occur
};