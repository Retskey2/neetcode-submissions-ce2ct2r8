class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     maxSubArray(nums) {

        class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     maxSubArray(nums) {
        let currentSum = nums[0]
        let maxSum = nums[0]

        for(let i = 1; i < nums.length; i++) {
            currentSum = Math.max(currentSum, nums[i] + currentSum)
            maxSum = Math.max(maxSum, currentSum)
        }

        return maxSum;
    }
}

       let maxSum = nums[0]
       let currentSum = nums[0]

        for(let i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], nums[i] + currentSum) 
            maxSum = Math.max(currentSum, maxSum)
        }

       return maxSum
    }
}
