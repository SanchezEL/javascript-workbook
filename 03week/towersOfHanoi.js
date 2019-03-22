'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let counter = 0;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  let movingPiece = stacks[startStack].pop(); //removes the top piece from the start stack and stores it in a variable
  stacks[endStack].push(movingPiece)//moves that piece to the end stack
  counter++;
  console.log('Moves: ' + counter);
}
function isValid(inputStack) {
  let validInput = ['a','b','c'] 
  for(let i = 0; i < validInput.length; i++){
    if(inputStack === validInput[i]){
      return true; //if the input matched any of the validInput array than it is a valid
    }
  }
  console.log('Please enter a valid input')
  return false;
}

function isLegal(startStack, endStack) {
  // Your code here
  let startArr = stacks[startStack]
  let endArr = stacks[endStack]
  if(!(startArr.length === 0) && ((startArr[startArr.length-1] < endArr[endArr.length-1]) || endArr.length === 0)){
    //if the start stack is not empty !(startArr.length === 0)
    //and the piece at the top of the stack (startArr[startArr.length-1])
    //is bigger than the piece at the top of the stack its moving to (endArr[endArr.length-1])
    //or the stack its moving to is empty (endArr.length === 0)
    // it is a legal move
    return true;
  }
  console.log("Move is illegal")
  return false;
  
}

function checkForWin() {
  // Your code here
  let winArr = [4,3,2,1] //the array stack c must be equal 
  let cArr = stacks['c']
  if(cArr.length === winArr.length){
    for(let i = 0; i < winArr.length; i++){
      if(cArr[i] !== winArr[i]){ 
        return false; //if stack c at a given index is not equal to the win array index, checkWin returns false
      }
    }
    return true; //if none of the indices didn't match then c stack must meet the win condition
  }
  return false; //if c stack wasn't as long as the win array then it didn't meet the win condition
  
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if((isValid(startStack) && isValid(endStack)) && isLegal(startStack, endStack)){
    movePiece(startStack,endStack)
    if(checkForWin()){
      console.log('You win with ' + counter + ' moves')
    }
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [], c: [4, 3, 2] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('#isValid', ()=>{
    it('should not allow an invalid input',() => {
      assert.equal(isValid('r'), false);
    })
    it('should allow a valid input', () => {
      assert.equal(isValid('a'), true);
    })
  })

} else {

  getPrompt();

}
