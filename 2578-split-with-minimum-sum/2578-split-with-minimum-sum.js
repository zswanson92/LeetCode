/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let ptOne = "";
    let ptTwo = "";
    let abc = num.toString()
    let arr = []
    console.log(abc.split(''))
    for(let i = 0; i < abc.length; i++){
        arr.push(Number(abc[i]))
    }
    console.log(abc)
    arr.sort((a, b) => a - b)
    console.log(arr)
    for(let j = 0; j < arr.length; j++){
        if(j % 2 === 0){
            ptOne += arr[j]
        } else {
            ptTwo += arr[j]
        }
    }
    
    return Number(ptOne) + Number(ptTwo)
};