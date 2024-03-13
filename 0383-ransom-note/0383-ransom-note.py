class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        mag = {}
        for x in magazine:
            if x not in mag:
                mag[x] = 1
            else:
                mag[x] += 1
        for y in ransomNote:
            if y in mag:
                mag[y] -= 1
            else:
                mag[y] = -1
        for z in mag:
            if mag[z] < 0:
                return False
        return True