/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*

Approach:

Calculate the division at index 0 by iterating through the array one time

create an array to store scores, initialized with 1 value of score 0 at index 0
  iterate through nums once, and calculate the initial score if divided at 0
    score at 0 is how many '1' are seen 

THEN

Iterate through the array once more, 
 adjusting the score based on what the logic dictates:
  if a 0 will be placed left of the pointer (so at index 0 when pointer is 1)
    increase the score by 1 at that index
  if a 1 will be placed left..
    decrease the score by 1 at that index
    
example:

0,0,1,0

while building this score array, keep track of the HIGHEST SCORE

THEN

reduce the score array, pushing indexes where current value === highest score


*/


var maxScoreIndices = function(nums) {
  const scores = [0];
  let highestScore = 0;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === 1){
      scores[0]++;
      highestScore = scores[0];
    }
  }
  
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === 0){
      scores[i+1] = scores[i] + 1;
      highestScore = Math.max(highestScore, scores[i+1]);
    } else {
      scores[i+1] = scores[i] - 1;
    }
  }

  return scores.reduce(function(prev, cur, ind){
    if (cur === highestScore){
      prev.push(ind)
    }
    return prev;
  }, [])
};