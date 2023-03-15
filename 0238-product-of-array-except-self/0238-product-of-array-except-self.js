/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
//     if(nums.length === 2) return [nums[1], nums[0]]
//     let arr = []
//     // let arrTwo = []
//     let prod = 0
//     let copy = [...nums]
//     for(let i = 0; i < nums.length; i++){
//         let abc = copy[i]
//         let poo = []
//         copy.splice(i, 1)
//         for(let k = 0; k < copy.length; k++){
//             poo.push(copy[k])
//         }
//         arr.push(poo)
//         copy.splice(nums.length, 1, abc)
//         i--
//         prod++
//         if(prod === nums.length) break
//     }
    
//     for(let k = 0; k < arr.length; k++){
//         arr[k] = (arr[k].reduce((a, b) => a * b))
//     }
    
//     return arr
    
    
    const res = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    res.push(product);
    product *= nums[i];
  }

  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= product;
    product *= nums[j];
  }

  return res;
};