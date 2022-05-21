/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/*
Approach: 

take it or leave it

add the first value in the array to the possible combo, and pass that + all possibilities (left path)
 OR
do NOT add the first value, and pass the current value of the path + all possibilities EXCEPT the first (right path)

if current sum > target, return, if current sum === target, add to output, and return

*/
var combinationSum = function(candidates, target) {
  const output = [];
  function findCombos(choices, path, currentSum){
    if (!choices.length){
      return;
    }
    if (currentSum === target){
      output.push(path);
      return;
    } else if (currentSum > target){
      return;
    }
    return (findCombos(choices, [...path, choices[0]], currentSum + choices[0]), findCombos(choices.slice(1), [...path], currentSum))
    
  }
  findCombos(candidates, [], 0)
  console.log(output)
  return output;
};