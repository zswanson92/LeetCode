/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    for(let i = 0; i < sentences.length; i++){
        sentences[i] = sentences[i].split(' ')
    }
    return sentences.sort((a, b) => b.length - a.length)[0].length
};