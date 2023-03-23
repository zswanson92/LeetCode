/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // console.log(x.toString().split(''))
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
        console.log("!!!!", abc)
        xyz = abc.join('')
        console.log("???", xyz)
    }
    
    xyz = Number(xyz)
    console.log(typeof xyz)
    // abc = Number(abc)
    
    if(xyz > -(2**31) && xyz < 2**31 - 1){
       return xyz 
    } else {
        return 0
    }
    
};