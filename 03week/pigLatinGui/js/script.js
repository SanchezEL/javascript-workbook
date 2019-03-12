'use strict';

$(document).ready(function() {
  
  let vowels = ['a','e','i','o','u']
  const isVowel = (cha) => {
    for(let i = 0; i < vowels.length; i++){
      if(cha === vowels[i]){
        return true
      }
    }
    return false
  }
  function translate(word){
    var wordLower = word.trim().toLowerCase();
    var wordArr = wordLower.split("");
    let bool = true;
    let x = 0;
    let count = 0;
    while(!(isVowel(wordArr[x])) && count < wordArr.length){
      // console.log(x) 
      wordArr.push(wordArr.shift())
      // console.log(midArr)
      bool = false;
      count++;
    }
    // var pigWord = wordArr.concat(midArr)
    if(bool){
      wordArr = wordArr.concat('y')
    }
    wordArr = wordArr.concat('ay')
    return wordArr.join("")
  }
  $('#translate-activate').click(function() {
    let text = ($('textarea#eng').val())
    let textArr = text.split(' ')
    let translatedTextArr = [];
    for(let i = 0; i < textArr.length; i++){
      translatedTextArr.push(translate(textArr[i]))
    }
    console.log(translatedTextArr)
    let translatedText = translatedTextArr.join(' ');
    console.log(translatedText)
    $('textarea#outputyay').text(translatedText)
    // let translated = translate($('textarea#eng').val())
  })

 
});
