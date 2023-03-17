/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let obj = {}
    
    for(let i = 0; i < candyType.length ; i++){
        if(!obj[candyType[i]]){
            obj[candyType[i]] = 1
        } else {
            obj[candyType[i]]++
        }
    }
    
    let abc = Object.keys(obj)
    let differentCandies = abc.length
    
    let allowedEat = candyType.length / 2
    
    
    if(allowedEat === differentCandies){
        return differentCandies
    }
    
    if(allowedEat < differentCandies){
        return allowedEat
    }
    
    if(allowedEat > differentCandies){
        return differentCandies
    }
};