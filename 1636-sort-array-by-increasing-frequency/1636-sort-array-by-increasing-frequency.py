class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        obj = {}
        
        for x in range(len(nums)):
            if nums[x] not in obj:
                obj[nums[x]] = 1
            else:
                obj[nums[x]] += 1
        
        nums.sort(key=lambda x: (obj[x], -x))
        return nums