class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        for x in nums:
            if len(nums) > 1 and nums.count(nums[i]) > 2:
                while nums.count(nums[i]) > 2:
                    nums.remove(nums[i])   
            i += 1