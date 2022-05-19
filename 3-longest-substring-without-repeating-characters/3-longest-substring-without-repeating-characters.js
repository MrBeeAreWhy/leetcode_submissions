/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /*
      two pointers, starting at the first character
        move along the string with the right pointer, until a duplicate is detected
        if a duplicate is detected, move the left pointer along the string until there are no duplicates
          to check duplicates, use a SET
            add each character to the set
            evaluate set.has the right pointer value-> if so, set.delete the value at l, increment l
            
        
        at each step, assess if the length is the longest or not, and if so, update the maximum length
      
    */
  let maxLength = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  const dupes = new Set();
  while(rightPointer < s.length){
    while(dupes.has(s[rightPointer])){
      dupes.delete(s[leftPointer]);
      leftPointer++;
      continue;
    }
    dupes.add(s[rightPointer]);
    maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
    rightPointer++;
  }
  
  return maxLength;
};