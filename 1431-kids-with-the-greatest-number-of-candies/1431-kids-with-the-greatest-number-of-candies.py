class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        biggest = max(candies)
        res = []
        
        for x in range(len(candies)):
            if candies[x] + extraCandies >= biggest:
                res.append(True)
            else:
                res.append(False)
        
        return res
    