/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    
    strs.sort();
    
    if(strs[0] === "") return "";
    let start = strs[0] 
    let end = strs[strs.length-1];
    let result = "";
    
    
    for(let i = 0; i < start.length; i ++){
        if(start[i] === end[i]){
            result += start[i]
        } else{
            break
        }
    }
    
    return result;
};