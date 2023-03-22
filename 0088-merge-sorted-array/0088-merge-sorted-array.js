/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
//     if(m === 0){
//         nums1 = [0]
//     }
//     if(nums1.length !== m){
//        nums1.splice(nums1.length - m, m) 
//     }
    
//     if(n === 0){
//         nums2 = []
//     }
//     if(nums2.length !== n){
//         nums2.splice(nums2.length - n, n)
//     }
    
    
    
    
//     if(nums1.length > 1){
//         nums1.push(...nums2) 
//     } else {
//         nums1.push(...nums2)
//         nums1.splice(0,1)
//     }
    
//     console.log(nums1)
//     console.log(nums2)
    
//     nums1.sort((a,b) => a - b)
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