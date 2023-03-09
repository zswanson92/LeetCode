/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const odd = [];
    const even = [];
    const arr = [];
    for (let i = 0; i < nums.length; i += 2) {
        even.push(nums[i]);
        odd.push(nums[i + 1]);
    }
    odd.sort((a, b) => b - a);
    even.sort((a, b) => a - b);
    for (let i = 0; i < odd.length; i++) {
        arr.push(even[i]);
        if (odd[i]) arr.push(odd[i]);
    }
    return arr;
    
};