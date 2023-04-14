/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let hold = new Set()
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    for(let key in obj){
        if(obj[key] === 1){
            hold.add(key)
        }
    }
    console.log(hold)
    let abc = Array.from(hold)
    
    if(hold.size < k){
        return ""
    } else return abc[k - 1]
};