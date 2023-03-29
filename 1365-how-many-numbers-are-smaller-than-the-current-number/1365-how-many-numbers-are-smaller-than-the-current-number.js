/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = 0
    let curr;
    let arr = []
    
    for(let i = 0; i < nums.length; i++){
        curr = nums[i]
        
        for(let k = 1; k <= nums.length; k++){
            if(nums[k] < curr){
            count++
            }
            if(k === nums.length){
                arr.push(count)
                let abc = nums.splice(0, 1)
                nums.push(abc[0])
                count = 0
                i--                
            }
        }    
        if(arr.length === nums.length){
            break
        }
    }
    
    return arr
};