/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let incr = nums.length / 2
    let count = 0;
    let average;
    let track = new Set()
    let abc = nums.sort((a, b) => a - b)
    for(let i = 0; i < incr; i++){
        average = (abc[0] + abc[abc.length - 1]) / 2
        track.add(average)
        abc.splice(0, 1)
        abc.splice(abc.length -1, 1)
    }
    
    return track.size
};