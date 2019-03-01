// Write a JavaScript program to display the current day and time.
var d = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
console.log(d)

// Write a JavaScript program to convert a number to a string.
function numToString(n){
  let y = n.toString();
  console.log(typeof y);
  return  y + " is now a string";
}
var num = 10;
console.log(num);
console.log(typeof num)
var notNum = numToString(num);
console.log(notNum)
console.log(typeof notNum)

// Write a JavaScript program to convert a string to the number.
function stringToNum(s){
  let y = Number(s);
  return y;
}
var words = "12";
console.log(words);
console.log(typeof words);
var notString = stringToNum(words)
console.log(notString)
console.log(typeof notString)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
var typeBool = true;
console.log(typeof typeBool);
var typeNull = null;
console.log(typeof typeNull)
var typeUndefined;
console.log(typeof typeUndefined);
var typeNumber = 10;
console.log(typeof typeNumber)
var typeNan = NaN;
console.log(typeof typeNan);
var typeString = "hello";
console.log(typeof typeString)

// Write a JavaScript program that adds 2 numbers together.

function addition(num1, num2){
  return (num1 + num2)
}
var firstNum = 2;
var secNum = 3;
var finalNum = addition(firstNum, secNum)
console.log(finalNum);

// Write a JavaScript program that runs only when 2 things are true.
let x = 2;
let y = 6;
while(x < 5 && y > 4){
  x++;
  y++;
  console.log("both things are true");
}

// Write a JavaScript program that runs when 1 of 2 things are true.
let a = 2;
let b = 6;
while(a < 5 || b < 4){
  a++;
  b++;
  console.log("at least one thing is true");
}

// Write a JavaScript program that runs when both things are not true.
let x1 = 8;
let y2 = 6;
while(!(x1 < 5) && !(y2 < 4)){
  x1--;
  y2--;
  console.log("both things are NOT true");
}