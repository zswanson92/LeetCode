class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        avail = 0
    
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0 and (i == 0 or flowerbed[i - 1] != 1) and (i == len(flowerbed) - 1 or flowerbed[i + 1] != 1):
                avail += 1
                flowerbed[i] = 1

    
        return avail >= n
    