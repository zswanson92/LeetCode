/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let split = word.split('')
    if(!split.includes(ch)) return word
    
    let abc = split.splice(0, split.indexOf(ch) + 1)

    abc.reverse()
    return abc.join('') + split.join('')
};