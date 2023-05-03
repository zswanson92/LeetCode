class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        
        greater = []
        equal = []
        less = []
        
        for x in range(len(nums)):
            if(nums[x] < pivot):
                less.append(nums[x])
            if(nums[x] == pivot):
                equal.append(nums[x])
            if(nums[x] > pivot):
                greater.append(nums[x])

        nums = less + equal + greater
        return nums