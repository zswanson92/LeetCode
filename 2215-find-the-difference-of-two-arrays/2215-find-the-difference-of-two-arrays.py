class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        res1 = []
        res2 = []
        
        for x in range(len(nums1)):
            if nums1[x] not in nums2 and nums1[x] not in res1:
                res1.append(nums1[x])
                
                
        for g in range(len(nums2)):
            if nums2[g] not in nums1 and nums2[g] not in res2:
                res2.append(nums2[g])
                
        final = []
        final.append(res1)
        final.append(res2)
        
        return final