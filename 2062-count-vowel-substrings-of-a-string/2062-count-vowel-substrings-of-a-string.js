/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    
    
    for(let i = 0; i < word.length; i++){
        let holder = new Set()
        let loop = 0
        if(vowels.includes(word[i])){
            holder.add(word[i])
            while(vowels.includes(word[i + 1]) && i < word.length){
                i++
                loop++
                console.log("THIS IS LOOP", loop)
                if(!holder.has(word[i])){
                    holder.add(word[i])
                }
                
                if(holder.size === 5){
                    count++
                }
            }
        }
        i = i - loop
        
        console.log("THIS IS I", i)
        
//         if(holder.size === 5){
//             count++
//             if(holder.has(word[i + 1])){
//                 count++
//             } else{
                
//             }
//         }
    }
    return count
};