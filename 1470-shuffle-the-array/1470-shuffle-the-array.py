class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        abc = nums[:n]
        xyz = nums[n:]
        res = []
        for x in range(n):
            res.append(abc[x])
            res.append(xyz[x])
            
        return res