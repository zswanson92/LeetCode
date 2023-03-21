/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let ans = []
    
    let k = celsius + 273.15
    let f = (9/5)*celsius + 32
    
    ans.push(k, f)
    return ans
};