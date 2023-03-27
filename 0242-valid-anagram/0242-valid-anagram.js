/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let obj = {}
    
    let split = s.split('')
    let splitTwo = t.split('')
    split.sort()
    splitTwo.sort()
    
    
    for(let i = 0; i < split.length; i++){
        if(split[i] !== splitTwo[i]){
            return false
        }
    }
    
    return true
};