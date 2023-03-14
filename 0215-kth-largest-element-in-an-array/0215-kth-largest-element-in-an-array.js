/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    if(nums.length === 1) return nums[0]
    let sorted = nums.sort((a, b) => b - a)
    console.log(sorted)
    console.log(sorted.indexOf(k - 1))
    // if(k > 1) return sorted.indexOf(k - 1)
    return sorted[k - 1]
};