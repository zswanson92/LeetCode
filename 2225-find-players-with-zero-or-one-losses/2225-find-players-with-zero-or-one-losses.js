/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let res = []
    let loser = {}
    let abc = new Set()
    let loseArr = []
    for(let i = 0; i < matches.length; i++){
        let curr = matches[i]
        for(let j = 0; j < curr.length; j++){
            if(j === 0){
                abc.add(curr[j])
            } else if(!loser[curr[j]]){
                loser[curr[j]] = 1
            } else{
                loser[curr[j]]++
            }
        }
    }
    for(let key in loser){
        if(abc.has(Number(key))){
            abc.delete(Number(key))
        }
        if(loser[key] === 1){
            loseArr.push(Number(key))
        }
    }
    let xyz = Array.from(abc)
    xyz.sort((a, b) => a - b)
    res.push(xyz)
    loseArr.sort((a, b) => a - b)
    res.push(loseArr)
    return res
};