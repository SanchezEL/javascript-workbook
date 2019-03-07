'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here


  let vowels = ['a','e','i','o','u']
  const isVowel = (cha) => {
    for(let i = 0; i < vowels.length; i++){
      if(cha === vowels[i]){
        return true
      }
    }
    return false
  }
  var wordLower = word.trim().toLowerCase();
  var wordArr = wordLower.split("");
  let bool = true;
  let x = 0;
  while(!(isVowel(wordArr[x]))){
    // console.log(x) 
    wordArr.push(wordArr.shift())
    // console.log(midArr)
    bool = false;
  }
  // var pigWord = wordArr.concat(midArr)
  if(bool){
    wordArr = wordArr.concat('y')
  }
  wordArr = wordArr.concat('ay')
  return wordArr.join("")
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
