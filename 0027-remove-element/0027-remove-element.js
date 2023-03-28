/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 1 && nums[0] === val) return []
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums[i] = 100
            let abc = nums.splice(i, 1)
            nums.push(abc[0])
            i--
        }
    }
    
    let count = 0;
    
    for(let j = nums.length - 1; j >= 0; j--){        
        if(nums[j] === 100){
            nums.pop()
        } else {
            count = nums.length
            return count
        }
    }
    
    
};