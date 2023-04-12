/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */



let biSort = (arr, target) => {
        let i = 0
        let j = arr.length - 1
        
        while(i <= j){
            let mid = Math.floor(i + j / 2)
            if(arr[mid] === target){
                return true
            }
            else if(arr[mid] > target){
                j--
            } else{
                i++
            }
            
        }
        
        return false
}

var searchMatrix = function(matrix, target) {
    
    for(let i = 0; i < matrix.length; i++){
        if(biSort(matrix[i], target) === true){
            return true
        }
    }
    return false
};