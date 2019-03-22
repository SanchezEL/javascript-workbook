'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var colors = require('colors');

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  let numCorrect = 0;
  let numInPlace = 0;
  const guessArr = guess.split('');
  const solArr = solution.split('');
  // console.log(guessArr)
  // console.log(solArr)
  for(let i = 0; i < guessArr.length; i++){
    // console.log(guessArr[i] + " " + solArr[i])
    // console.log(guessArr[i] === solArr[i])
    if(guessArr[i] === solArr[i]){
      numInPlace++;
    }
  }
  // console.log(solArr)
  for(let j = 0; j < guessArr.length; j++){
    if(solArr.indexOf(guessArr[j]) !== -1){
      solArr[solArr.indexOf(guessArr[j])] = null;
      numCorrect++;
    }
  }
  numCorrect -= numInPlace;
  // console.log(solArr)
  console.log((numInPlace.toString() + " in Place").red + '-'+ (numCorrect.toString() + " correct").white)
  
  return numInPlace + '-' + numCorrect
  
}
const acceptableGuess = (guess) =>{
  let allLettersLegal = true
  const guessArr = guess.split('');
  if(guessArr.length === 4){
    guessArr.forEach((letter) => {
      if(letters.indexOf(letter) === -1){
        allLettersLegal = false;
      }
    })
  }
  else{
     allLettersLegal = false
  }
  return allLettersLegal
  
  
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  //save each guess
  if(acceptableGuess(guess)){
    if(guess === solution){
      board = [];
      console.log('You guessed it!')
      return 'You guessed it!'
    }else{
      board.push(guess)
      if(board.length > 9){
        board = [];
        console.log(`you're a loser. Solution was ${solution}`)
        return `you're a loser. Solution was ${solution}`
      }
      generateHint(guess)
      return 'Guess again.'
    }
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1'); 
    });

  });

} else {

  generateSolution();
  getPrompt();
}
