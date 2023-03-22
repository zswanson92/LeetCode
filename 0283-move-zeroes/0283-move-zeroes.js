/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
//     let copy = new Array(...nums)
//     if(nums.length === 1 || !nums.includes(0)) return nums
//     let count = 0
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === 0){
//             nums[i] = Infinity
//             count++
//         }
//     }
    
    
//     nums.sort((a, b) => a - b)
//     console.log(nums)
//     for(let k = nums.length - 1; k >= 0; k--){
//         if(nums[k] === Infinity){
//             nums[k] = 0
//         }
//     }
    
//     return nums
//     let i = 0
//     let j = nums.length - 1
//     while(i < j){
//         if(nums[j] === 0){
//             j--
//             // i++
//         } else if (nums[i] === 0){
//             // i++
//             [nums[i], nums[j]] = [nums[j], nums[i]]
//             // 
//             // j--
            
//         } else{
//           i++ 
//           // j--
//         }
        
//     }
//     return nums
    let counter = 0
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === 0){
            // counter++
            for(let k = i; k < i + counter; k++){
                [nums[k], nums[k + 1]] = [nums[k + 1], nums[k]]
            }
            // [nums[i], nums[i + counter]] = [nums[i + counter], nums[i]]

            // [nums[i], nums[i + counter]] = [nums[i + counter], nums[i]]
            // continue
        } else {
            counter++
        }
    }
    console.log(nums)
};