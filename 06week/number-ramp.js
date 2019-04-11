const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function getPrompt() {
  rl.question('Enter your number: ', (number) => {
    getPrompt();
  });
}