'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker() {
  // Your code here
}

function isValid(startPos, endPos, grid){
  let validMove = false;
  let start = startPos.split('')
  let startRow = start[0]
  let startCol = start[1]
  let end = endPos.split('')
  let endRow = end[0]
  let endCol = end[1]
  if(grid[startRow][startCol] && grid[startRow][startCol].symbol === 'r'){
    if((startPos-endPos) === 11 || (startPos-endPos === 9)){
      validMove = true;
    }
  }
  if(grid[startRow][startCol] && grid[startRow][startCol].symbol === 'b'){
    if((endPos-startPos) === 11 || (endPos-startPos === 9)){
      validMove = true;
    }
  }
  
  return validMove;
}
function isJump(startPos, endPos, grid){
  let jump = false;
  let start = startPos.split('')
  let startRow = start[0]
  let startCol = start[1]
  let end = endPos.split('')
  let endRow = end[0]
  let endCol = end[1]
  if(grid[startRow][startCol] && grid[startRow][startCol].symbol === 'r'){
    if((startPos-endPos) === 22 || (startPos-endPos === 18)){
      jump = true;
    }
  }
  if(grid[startRow][startCol] && grid[startRow][startCol].symbol === 'b'){
    if((endPos-startPos) === 22 || (endPos-startPos === 18)){
      jump = true;
    }
  }
  
  return jump;
  
}

class CheckerPiece{
  constructor(symbol){
    this.symbol = symbol;
    // console.log(this)
    game.board.checkers.push(this) //adds checker piece to checkers array in board
  }
}


class Board {
  constructor() {
    this.grid = []
    this.checkers = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }

  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol); //.symbol
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  initializeGrid() {
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < this.grid.length; j++){
        if((i+j)%2 !== 0){
          this.grid[i][j] = new CheckerPiece('b')
          // this.checkers.push(this.grid[i][j])
          // console.log(this.grid)
        }
      }
    }
    for(let i = 5; i < this.grid.length; i++){
      for(let j = 0; j < this.grid[i].length; j++){
        if((i+j)%2 !== 0){
          this.grid[i][j] = new CheckerPiece('r')
          // this.checkers.push(this.grid[i][j])
          // console.log(this.checkers)
        }
      }
    }
  }
  

  // Your code here
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.initializeGrid();
  }
  moveChecker(startPos, endPos){
    let start = startPos.split('');
    let startRow = start[0]
    let startCol = start[1]
    let end = endPos.split('');
    let endRow = end[0]
    let endCol = end[1]
    let grid = this.board.grid;
    if(grid[startRow][startCol] && isValid(startPos, endPos, grid)){
      // console.log(start + " " + startPos)
      // console.log(grid[start[0]][start[1]])
      // console.log(grid[end[0]][end[1]])
      grid[endRow][endCol] = grid[startRow][startCol]
      grid[startRow][startCol] = null
      this.board.grid = grid;
    }
    if(grid[startRow][startCol] && isJump(startPos, endPos, grid)){
      // console.log(start + " " + startPos)
      // console.log(grid[start[0]][start[1]])
      // console.log(grid[end[0]][end[1]])
      let midNum;
      if((startPos-endPos) === 22){
        midNum = startPos-11
      }
      else if((startPos-endPos) === 18){
        midNum = starPos-9
      }
      else if((endPos-startPos) === 22){
        midNum = endPos-11
      }
      else if((endPos-startPos) === 18){
        midNum = endPos-9
      }//sorry
      
      let mid = midNum.toString().split('')
      let midRow = mid[0]
      let midCol = mid[1]
      grid[endRow][endCol] = grid[startRow][startCol]
      grid[startRow][startCol] = null
      grid[midRow][midCol] = null
      
      // console.log(this.board.checkers.length)
      this.board.checkers.splice(this.board.checkers.indexOf(grid[midRow][midCol]), 1)
      // console.log(this.board.checkers.length, game.board.grid[5][2])
      this.board.grid = grid;
    } 
  
  }

}


function getPrompt() {
  // game.board.initializeGrid();
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}