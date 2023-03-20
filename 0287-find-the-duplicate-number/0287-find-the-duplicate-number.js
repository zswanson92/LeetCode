/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        } else {
            obj[nums[i]]++
        }
    }
    
    for(let el in obj){
        if(obj[el] > 1){
            return el
        }
    }
};