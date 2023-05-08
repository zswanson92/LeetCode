class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
       
        res = ""
        for x in range(max(len(word1), len(word2))):
            if not x > len(word1) - 1:
                res += word1[x]
            if not x > len(word2) - 1:
                res += word2[x]
                
        return res