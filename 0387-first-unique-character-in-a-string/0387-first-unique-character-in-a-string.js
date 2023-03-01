/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {}
    
    for(let i = 0; i < s.length; i++){
        if(!hash[s[i]]){
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }    
    let key;
    
    for(let el in hash){
        if(hash[el] === 1){
            key = el
            break
        }
    }
    
    return s.split('').indexOf(key)
};