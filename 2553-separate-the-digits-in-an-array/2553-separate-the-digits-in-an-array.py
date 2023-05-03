class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        res = []
        
        for x in range(len(nums)):
            abc = str(nums[x])
            for g in range(len(abc)):
                res.append(int(abc[g]))
                
        return res