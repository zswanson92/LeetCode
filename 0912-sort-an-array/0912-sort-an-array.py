class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) < 2: return nums
        
        mid = (len(nums))//2
        
        left = self.sortArray(nums[0:mid])
        right = self.sortArray(nums[mid::])
        
        return merge(left, right)
        
