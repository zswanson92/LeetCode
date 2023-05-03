class Solution:
    def findTheArrayConcVal(self, nums: List[int]) -> int:
        conc = 0
        
        while len(nums) > 1:
            abc = ""
            abc += str(nums[0])
            abc += str(nums[len(nums) - 1])
            conc += int(abc)
            abc = ""
            del nums[0]
            del nums[len(nums) - 1]
            
        if len(nums) > 0:
            conc += nums[0]
            
        return conc