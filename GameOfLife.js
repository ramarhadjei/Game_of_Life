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
    function makeBoard(cols, rows){
      let arr = new Array(cols);
      for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
        //for (let j = 0; i <)
      }
      return arr
    }
    let grid;
    let cols = 10;
    let rows = 10;

    function setup() {
      grid = makeBoard(cols, rows);
      for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
          grid[i][j] = floor(random(2));

          //This will give a nested loop

        }
      }
    }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
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
}
