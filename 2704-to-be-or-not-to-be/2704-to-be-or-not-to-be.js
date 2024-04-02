/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(val_one){
            if (val_one === val){
                return true
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: function(val_two){
            if(val_two !== val){
                return true
            } else{
                throw new Error("Equal")
            }
        }
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */