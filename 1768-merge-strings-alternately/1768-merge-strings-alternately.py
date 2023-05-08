class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
       
        longest = len(word1) if len(word1) > len(word2) else len(word2)
        res = ""
        for x in range(longest):
            if not x > len(word1) - 1:
                res += word1[x]
            if not x > len(word2) - 1:
                res += word2[x]
                
        return res