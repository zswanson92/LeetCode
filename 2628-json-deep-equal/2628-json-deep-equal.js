/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    
//     if(Array.isArray(o1) && Array.isArray(o2) && o1.length !== o2.length) return false
//     if(Array.isArray(o1) && o1.length > 1 && Array.isArray(o2) && o2.length > 1){
//         console.log(o1.join(''))
//         console.log(o2.join(''))
//         for(let k = 0; k < o1.length; k++){
//             if(typeof o1[k] === 'object' && !Array.isArray(o1[k])){
//                 for(let abc in o1[k]){
//                     if(o1[k][abc] !== o2[k][abc]){
//                         return false
//                     }
//                 }
//             } else if(Array.isArray(o1[k])){
//                 if(o1[k].length !== o2[k].length){
//                     return false
//                 }
//             }
            
//             else if(o1[k] !== o2[k]){
//                 return false
//             }
//             // console.log(o1[k])
//         }
//     } 

//     for(let key in o1){
//         console.log(typeof o1[key])
//         console.log(typeof o2[key])
//         if(typeof o1[key] === 'object' && o1[key] !== null && !Array.isArray(o1[key]) && !Array.isArray(o2[key]) && typeof o2[key] === 'object' && o2[key] !== null){
//             for(let i = 0; i < o1[key].length; i++){
//                 if(o1[key][i] !== o2[key][i]) return false
//             }
//         } else if(typeof o1[key] === 'object' && o1[key] !== null && Array.isArray(o1[key]) && Array.isArray(o2[key]) && typeof o2[key] === 'object' && o2[key] !== null){
//             if(o1[key].length !== o2[key].length){
//                     return false
//             } else if(o1[key].length === o2[key].length){
//                 for(let h = 0; h < o1[key].length; h++){
//                     if(!Array.isArray(o1[key][h]) && !Array.isArray(o1[key][h]) && o1[key][h] !== o2[key][h]){
//                         return false
//                     } else if(Array.isArray(o1[key][h]) && Array.isArray(o1[key][h])){
//                         if(o1[key][h].length === o2[key][h].length){
//                             for(let p = 0; p < o1[key][h].length; p++){
//                                 console.log("NBUM", o1[key].length)
//                                 console.log("UWU", o1[key][h][p][0][0])
//                                 console.log("AWAAA", o2[key][h][p][0][0])
//                                 if(Array.isArray(o1[key][h][p][0][0]) && Array.isArray(o2[key][h][p][0][0]) ){
//                                     return o1[key][h][p][0][0].length === o2[key][h][p][0][0].length
//                                 }
//                             }
//                         } else return o1[key][h][p][0][0] === o2[key][h][p][0][0]
//                     }
//                 }
//             }
//         }
//         else if(o1[key] !== o2[key] || o1.length !== o2.length || Object.keys(o1).length !== Object.keys(o2).length) return false
//     }
    
    
//     if(typeof o1 !== 'object' && typeof o2 !== 'object'){
//         return o1 === o2
//     }
//     return true
    if (o1 === o2) {
        return true;
    }
    if (typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) {
        return false;
    }
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    return keys1.every(key => keys2.includes(key) && areDeeplyEqual(o1[key], o2[key]));
};