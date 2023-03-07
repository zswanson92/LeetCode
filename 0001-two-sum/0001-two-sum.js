/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
    
    for(let i = 0 ; i < nums.length ; i++){
        // console.log("IIIIII", nums[i])
        for(let j = nums.length - 1; j > 0 ; j--){
            // console.log("JJJJJ", nums[j])
            if(nums[i] + nums[j] === target){
                if(i !== j){
                    arr.push(i, j)
                }
                // arr.push(nums.indexOf(nums[i]), nums.indexOf(nums[j]))
                break
            }
        }
        if(arr.length > 0) break
    }
    
    return arr
};