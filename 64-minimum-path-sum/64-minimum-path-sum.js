/**
 * @param {number[][]} grid
 * @return {number}
 */

/*

thoughts:
  each square can store the value of the minimum it cost to reach that square
  for example,
  grid = [[1,3,1],[1,5,1],[4,2,1]]
  
  to reach grid[1][0] (down 1 square from 0,0) the min cost would be 2
  then to reach grid[1][1] it would be the minimum cost of reaching that square, which is grid[1][0] (two) PLUS grid[1][1] = 7
    OR
  it could be grid[0][1] (4) plus grid[1][1] = 9 -> nope, cheapest route to that square is 7 by going down then right rather than right then down
  
  SO
  
  iterate through the grid rows/col
    for each square, it's cheapest move is its own value + Math.min(square above, square left)
      reassign the square to have that value while moving through the array
      
      start at 0,0 -> all moves are OOB, so it's just 0,0's value
      move right, 0,1 -> self + Math.min(square above, square left) -> no square above, so just add left
        repeat thru first row
      second row:
        same as above, but NOW it calcs the move from above AND from the left, taking the MINIMUM cost
      
      ultimately ends on the last square (bottom right) with the minimum cost



*/
var minPathSum = function(grid) {
  const findCheapestMove = (row, col) =>{
    if (row < 0 || col < 0) {return Infinity} //OOB moves get infinite cost
    return grid[row][col];
  }
  
  for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[0].length; col++){
      if (row === 0 && col === 0){continue}//don't check for the first square, it is always just its own value
      grid[row][col] += Math.min(findCheapestMove(row-1, col), findCheapestMove(row, col-1));
    }
  }
  
  return grid[grid.length-1][grid[0].length-1];
};