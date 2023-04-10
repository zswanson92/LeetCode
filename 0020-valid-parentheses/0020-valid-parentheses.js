/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split("");
    let stack = [];
    for (let brack of s) {
        if (brack === "(" || brack === "{" || brack === "[") {
            stack.push(brack);
        } else {
            let end = stack[stack.length - 1];
            if (brack === ")" && end === "(" || brack === "]" && end === "[" || brack === "}" && end === "{")
                stack.pop();
            else
                return false;
        }
    }
    return stack.length === 0;
};


