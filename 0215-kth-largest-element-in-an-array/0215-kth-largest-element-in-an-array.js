/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    if(nums.length === 1) return nums[0]
    let sorted = nums.sort((a, b) => b - a)
    return sorted[k - 1]
};