/**
 * @param {number[]} nums
 * @return {number}
 */

/*
The only satisfactory solution is to use bitwise XOR operator
  all duplicate numbers will cancel eachother out leaving only the number that was not duplicated
  any number bitwise XOR itself will = 0
*/
var singleNumber = function(nums) {
 let result = 0;
  for (let i = 0; i < nums.length; i++){
    result = result ^ nums[i]
  }
  return result;
}
