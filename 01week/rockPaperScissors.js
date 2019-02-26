'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  let p1 = hand1.toLowerCase()
  let p2 = hand2.toLowerCase()
//check if tie
// condense possible hand1 victories


  if(p1 === p2){
    return "It's a tie..."
  }
  else if((p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock") || (p1 === "scissors" && p2 === "paper")){
    return "Hand1 Wins!!!"
  }
  else if((p2 === "rock" && p1 === "scissors") || (p2 === "paper" && p1 === "rock") || (p2 === "scissors" && p1 === "paper")){
    return "Hand2 Wins!!!"
  }
  else{
    return "Please check your spelling"
  }
  // if(p1 === "rock"){
  //   if(p2 === "paper"){
  //     return ("Hand2 Wins!!!")
  //   }
  //   else if(p2 === "scissors"){
  //     return ("")
  //   }
  //   else{
  //     return "Please check your spelling"
  //   }
  // }
  // else if(p1 === "paper"){
  //   if(p2 === "rock"){
  //     return ("Hand1 Wins!!!")
  //   }
  //   else if(p2 === "scissors"){
  //     return ("Hand2 Wins!!!")
  //   }
  //   else{
  //     return "Please check your spelling"
  //   }
  // }
  // else if(p1 === "scissors"){
  //   if(p2 === "rock"){
  //     return ("Hand2 Wins!!!")
  //   }
  //   else if(p2 === "paper"){
  //     return ("Hand1 Wins!!!")
  //   }
  //   else{
  //     return "Please check your spelling"
  //   }
  // }
  // else{
  //   return "Please check your spelling"
  // }

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
