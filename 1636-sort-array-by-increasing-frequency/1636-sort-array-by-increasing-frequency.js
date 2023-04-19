/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let obj = {}
    
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        } else{
            obj[nums[i]] ++
        }
    }
    nums.sort((a, b) => {
        
        if(obj[a] === obj[b]){
            return b - a
        }

        
        return obj[a] - obj[b]
    })
    return nums
};