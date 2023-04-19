/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
    let max = 0;
    let prev = 0
    let res = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max){
            prev = max
            max = nums[i]
        }
        res.push(nums[i] + max)
        if(i > 0){
            res[i] = res[i] + res[i - 1]
        }
    }
    return res
};