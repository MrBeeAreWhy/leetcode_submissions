/**
 * @param {character[][]} board
 * @return {boolean}
 */

/*
rows, columns and quadrants

each row, each column and each quadrant must be a set of the numbers 1-9 without repetition
  probably a good idea to use a Set -- looking at unique values here
  `r1has1` `r1has2` `c1has1` 1g00has1
  rows and columns are fairly straightforward: use the indexes
  however, grid can be found by Math.floor(col/3) and Math.floor(row/3)
  
  empty values are a assigned '.' and should be skipped


  essentially, return true as a default value, with an early return of false if a duplicate is encountered
    check a duplicate when we try and add a new value to the set and if it does not increase the size of the set, it's a dup
*/

var isValidSudoku = function(board) {
  const dupSet = new Set();
  for (let row = 0; row < board.length; row++){
    for (let col = 0; col < board[0].length; col++){
      if (board[row][col] === '.'){
        continue;
      }
      const setLength = dupSet.size;
      const subBoxRow = Math.floor(row/3);
      const subBoxCol = Math.floor(col/3);
      const subBox = `box${subBoxRow}${subBoxCol}`;
      
      dupSet.add(`r${row}has${board[row][col]}`);
      dupSet.add(`c${col}has${board[row][col]}`);
      dupSet.add(subBox + `has ${board[row][col]}`);
      
      if (dupSet.size !== setLength + 3){
        return false;
      }
    }
  }
  
  return true;
};