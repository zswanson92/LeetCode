class Solution:
    def findPrefixScore(self, nums: List[int]) -> List[int]:
        max = 0
        res = []
        
        for x in range(len(nums)):
            if nums[x] > max:
                max = nums[x]
            
            res.append(nums[x] + max)
            if x > 0:
                res[x] = res[x] + res[x - 1]
                
        return res
    
    
    
