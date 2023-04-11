class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) < 2: return nums
        
        mid = (len(nums))//2
        
        left = self.sortArray(nums[0:mid])
        right = self.sortArray(nums[mid::])
        
        return merge(left, right)
        
    def merge(left, right):
        merge = []
        
        while len(left) or len(right):
            if left[0] < right[0]:
                merge.push(left.pop(0))
                
            else:
                merge.push(right.pop(0))
                
            return merge + left + right