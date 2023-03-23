/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // let leng1 = nums1.length
    // let leng2 = nums2.length
    // let arr = []
    // arr.push(...nums1)
    
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b)
    if(nums1.length % 2 !== 0){
        return nums1[Math.floor(nums1.length / 2)]
    } else {
        return (nums1[(nums1.length / 2) - 1] + nums1[(nums1.length / 2)]) / 2
    }
};