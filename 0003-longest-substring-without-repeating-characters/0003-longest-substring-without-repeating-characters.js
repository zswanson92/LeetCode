/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hold = new Set()
    let left = 0
    let right = 0
    let val = 0
    
    while(right < s.length){
        while(hold.has(s[right])){
            hold.delete(s[left])
            left += 1
        }
        val = Math.max(val, right-left+1)
        hold.add(s[right])
        right += 1
    }
    
    return val
};