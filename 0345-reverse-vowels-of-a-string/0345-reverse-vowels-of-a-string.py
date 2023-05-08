class Solution:
    def reverseVowels(self, s: str) -> str:
        arr = []
        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        
        for i in range(len(s)):
            if(s[i] in vowels):
                arr.append(s[i])
        s = list(s)
        count = 0
        for x in reversed(range(len(s))):
            if(s[x] in vowels):
                s[x] = arr[count]
                count += 1

        return ''.join(s)