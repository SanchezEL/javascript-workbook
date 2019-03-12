'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  for(let i = 0; i < board.length; i++){
    if(board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][0] === board[i][2] &&  board[i][1] === board[i][2]){
      return true;
    }
  }
  return false
}

function verticalWin() {
  // Your code here
  for(let i = 0; i < board.length; i++){
    if(board[0][i] !== ' ' && board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[1][i] === board[2][i]){
      // console.log(board[0][i] === board[1][i])
      return true;
    }
  }
  return false;
}

function diagonalWin() {
  // Your code here
  if((board[0][0] !== ' ' && board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[1][1] === board[2][2]) || 
      (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[1][1] === board[2][0])){
        return true;
      }
  return false;
}

function checkForWin() {
  // Your code here
  if(horizontalWin() || verticalWin() || diagonalWin()){
    // console.log(verticalWin())
    printBoard();
    console.log(playerTurn + " WINS")
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    if(playerTurn === 'X'){
      playerTurn = 'O'
    }
    return true;
  }
  return false
}
function checkForTie() {
  if(board[0][0] !== ' ' && board[0][1] !== ' ' && board[0][2] !== ' ' &&
  board[1][0] !== ' ' && board[1][1] !== ' ' && board[1][2] !== ' ' &&
  board[2][0] !== ' ' && board[2][1] !== ' ' && board[2][2] !== ' '){
    printBoard();
    console.log("It's a tie...")
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    if(playerTurn === 'X'){
      playerTurn = 'O'
    }
    return true;
  }
  return false;
}

function ticTacToe(row, column) {
  // Your code here
  if(row < 3 && row > -1 && column < 3 && column > -1 && board[row][column] === ' ' ){
    board[row][column] = playerTurn
    console.log(board[row][column])
    checkForWin();
    checkForTie();
    if(playerTurn === 'X'){
      playerTurn = 'O'
    }
    else{
      playerTurn = 'X';
    }
    
  }
  else{
    console.log("N O T  A  V A L I D  M O V E")
  }

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
