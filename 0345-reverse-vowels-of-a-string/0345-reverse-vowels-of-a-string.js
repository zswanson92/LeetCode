/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = []
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            arr.push(s[i])
        }
    }
    s = s.split('')
    let count = 0
    for(let g = s.length; g >= 0; g--){
        if(vowels.includes(s[g])){
            s[g] = arr[count]
            count++
        }
    }
    
    return s.join('')
};