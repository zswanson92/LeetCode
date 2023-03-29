/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let eleSum = 0
    let digitSum = 0
    let digitStr = []
    
    for(let i = 0; i < nums.length; i++){
        eleSum += nums[i]
    }
    
    for(let k = 0; k < nums.length; k++){
        if(nums[k] >= 10){
            nums[k] = nums[k].toString()
            nums[k].split('')
            for(let j = 0; j < nums[k].length; j++){
                digitStr.push(nums[k][j])
            }
            
        } else {
            digitSum += nums[k]
        }
    }
    
    for(let g = 0; g < digitStr.length; g++){
        digitStr[g] = Number(digitStr[g])
        digitSum += digitStr[g]
    }
    
    return Math.abs(eleSum - digitSum)
};