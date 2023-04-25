class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        s = [*s]
        arr = [None] * len(s)
        for x in range(len(s)):
            xyz = indices[x]
            arr[xyz] = s[x]   
        g = ''.join(arr)
        s = ''.join(s)
        s = g
        return s
        