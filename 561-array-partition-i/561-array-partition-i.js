/**
 * @param {number[]} nums
 * @return {number}
 */

/*

Approach: 
  Taking the MIN of each pair -> need to pair numbers as closely as possible
  1,2,3,4 -> pairing 1 with 4 is a cost of 3
          -> pairing 1 with 2 is a cost of 1
              better to pair small with small
              
  SO
  
  best to sort the initial array (nLog(n)) and then iterate through it
  starting with index 0 (min of 0 and 1) then incrementing by 2 until thru entire array
   
*/
var arrayPairSum = function(nums) {
  nums = nums.sort((a,b) => a-b);
  let sum = 0;
  for (let i = 0; i < nums.length; i+=2){
    sum += nums[i];
  }
  return sum;
};