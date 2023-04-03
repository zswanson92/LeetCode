/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let alice = 0;
    let bob = 0;
    for(let [a, b] = [0, piles.length - 1]; a < b; a++, b--){
            
            console.log("A", a)
            console.log("B", b)
        if(piles[a] === piles[b]){
            if(piles[a + 1] > piles[b - 1]){
                alice += piles[b]
                if(piles[a] > piles[b - 1]){
                    bob += piles[a]
                } else {
                    bob += piles[b - 1]
                }
            } else {
                alice += piles[a]
                if(piles[b] > piles[a + 1]){
                    bob += piles[b]
                } else {
                    bob += piles[a + 1]
                }
            }
        }
        
        else if(piles[a] > piles[b]){
            alice += piles[a]
            a++
            
            if(piles[b] > piles[a]){
                bob += piles[b]
                a--
            } else {
                bob += piles[a]
                a--
            }
        } else {
            alice += piles[b]
            b--
            
            if(piles[a] > piles[b]){
                bob += piles[a]
                b++
            } else {
                bob += piles[b]
                b++
                // a--
                // console.log("YA", a, "BBB", b)
            }
        }
        console.log(alice)
        console.log("THIS IS BOB", bob)
    }

    return alice >= bob
};