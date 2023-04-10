/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0
    let right = height.length - 1
    
    while(left < right){
        let smallSide = Math.min(height[left], height[right])
        let area = (right - left) * smallSide
        
        if(area > max) max = area
        if(height[left] < height[right]) left++
        else right--
    }
    return max
};