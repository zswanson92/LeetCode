/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let j = numbers.length - 1
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] + numbers[j] > target){
            j--
            i--
        } else if(numbers[i] + numbers[j] < target){
            continue
        } else if(numbers[i] + numbers[j] === target){
            return [i + 1, j + 1]
        }
    }
};