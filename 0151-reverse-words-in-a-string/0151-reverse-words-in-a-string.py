class Solution:
    def reverseWords(self, s: str) -> str:
        
        s = s.split(' ')
        print(s)
        
        res = []
        for x in reversed(range(len(s))):
            if s[x]:
                res.append(s[x])
                
        return ' '.join(res)
        
