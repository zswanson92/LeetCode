class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        res = []
        
        for x in range(len(candies)):
            if candies[x] + extraCandies >= max(candies):
                res.append(True)
            else:
                res.append(False)
        
        return res
    