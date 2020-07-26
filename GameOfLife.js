class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    // TODO: Create and return an 2D Array
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
  

    var board = [];
    for (var i=0; i < this.height; i++){
    var row = [];
 
for (var j = 0; j < this.width; j++){
  var col = 0;
  row.push(col);
}
  board.push(row)
}
  
  //  var board =[];
  return board;
}

indexFor(row, col){
  //return undefined if we're out of bounds
  if (row < 0 || row >= this.height || col < 0 || col >= this.width){
  return;
}

return row * this.width + col;
}


  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    for(let i =0; i< col; i++){
      for(let j = 0; j < row; j++){

      }
    
    }
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
  getCell (row,col){

    // create cellExist function and then do if this.cellExist() { code rest in here}

      if (value = 1){
        return value =  1;
      } else if (value = 0) {
        return value = 0;
      }
      
      return value; 
    
  }

  setCell (value, row, col){
}
}
