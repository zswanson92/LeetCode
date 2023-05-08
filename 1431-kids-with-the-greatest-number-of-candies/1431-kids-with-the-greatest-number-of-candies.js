/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    let res = []
    for(let i = 0; i < candies.length; i++){
        if(candies[i] > max){
            max = candies[i]
        }
    }
    for(let g = 0; g < candies.length; g++){
        if(candies[g] + extraCandies >= max){
            res.push(true)
        } else{
            res.push(false)
        }
    }
    return res
};