/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let insert = m + n - 1
    m--
    n--
    while(n >= 0){
        if(nums1[m] > nums2[n]){
            nums1[insert] = nums1[m]
            m--
        } else {
            nums1[insert] = nums2[n]
            n--
        }
        insert--
    }
};