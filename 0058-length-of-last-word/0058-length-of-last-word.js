/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 1) return 1
    let abc = s.split(' ')
    let longest = 0
    for(let i = abc.length - 1; i >= 0; i--){
        if(abc[i] === ''){
           continue
        } else{
            longest = abc[i].length
            break
        }
        
    }
    return longest
};