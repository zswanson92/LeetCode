/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let subStr = ''
    let split = sentence.split(' ')
    
    for(let i = 0; i < split.length; i++){
        console.log("UWU", split[i])
        for(let j = 0; j < split[i].length; j++){
            subStr += split[i][j]
            if(dictionary.includes(subStr)){
                split[i] = dictionary[dictionary.indexOf(subStr)]
                break
            }
        }
        subStr = ''
    }
    
    return split.join(' ')
};