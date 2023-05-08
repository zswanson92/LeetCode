/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let avail = 0
    
    for(let i = 0; i < flowerbed.length; i++){
        if((flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] === 0) || (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] === undefined)){
            avail += 1
            flowerbed[i] = 1
        }
    }
    
    
    return avail >= n
};