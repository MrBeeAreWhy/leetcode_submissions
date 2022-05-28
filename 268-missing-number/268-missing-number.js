/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sumOfNums = 0;
  
  for (let i = 0; i < nums.length; i++){
    sumOfNums += nums[i];
  }

  return (nums.length * (1 + nums.length) / 2) - sumOfNums;
};