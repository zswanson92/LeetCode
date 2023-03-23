/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xyz;
    let abc = x.toString().split('')
    if(!abc.includes('-')){
        abc.reverse()
        xyz = abc.join('')
    } 
    
    if(abc.includes('-')){
        abc.splice(0, 1)
        abc.reverse()
        abc.unshift('-')
        xyz = abc.join('')
    }
    
    xyz = Number(xyz)
    
    if(xyz > -(2**31) && xyz < 2**31 - 1){
       return xyz 
    } else {
        return 0
    }
    
};