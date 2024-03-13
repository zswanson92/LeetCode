class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ran = {}
        mag = {}
        for x in range(len(magazine)):
            if magazine[x] not in mag:
                mag[magazine[x]] = 1
            else:
                mag[magazine[x]] += 1
        for y in ransomNote:
            if y in mag:
                mag[y] -= 1
            else:
                mag[y] = -1
        print(mag)
        for z in mag:
            if mag[z] < 0:
                return False
        return True