/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let differences = []
    for(let i = 0; i < capacity.length; i++){
        if(capacity[i] > rocks[i]){
            differences.push(capacity[i] - rocks[i])
        }
    }
    
    differences.sort((a, b) => a - b)
    let res = rocks.length - differences.length
    
    for(let j = 0; j < differences.length; j++){
        if(additionalRocks < differences[j]){
            break
        }
        additionalRocks -= differences[j]
        res++
        
    }
    return res
};