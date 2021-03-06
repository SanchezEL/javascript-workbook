'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // Write code here
  let p1 = hand1.toLowerCase().trim()
  let p2 = hand2.toLowerCase().trim()
  
  if(p1 === p2){
    return "It's a tie..."
  }
  else if((p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock") || (p1 === "scissors" && p2 === "paper")){
    return "Hand one wins!"
  }
  else if((p2 === "rock" && p1 === "scissors") || (p2 === "paper" && p1 === "rock") || (p2 === "scissors" && p1 === "paper")){
    return "Hand two wins!"
  }
  else{
    return "Please check your spelling"
  }
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
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie...");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie...");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie...");
    });
    it('should detect a hand two victory', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors','rock'),"Hand two wins!");
      
    });
    it('should detect a hand one victory', () =>{
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should detect an invalid entry', ()=> {
      assert.equal(rockPaperScissors('rok', 'paper'), "Please check your spelling")
      assert.equal(rockPaperScissors('Spock', 'lizard'), "Please check your spelling")
    });
  });
} else {

  getPrompt();

}
