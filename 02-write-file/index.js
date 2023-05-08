const path = require('path');
const fs = require('fs');
const {
  stdin: input,
  stdout: output,
} = require('node:process');
const process = require('node:process');
const readLine = require('node:readline');
const reading = readLine.createInterface({input, output});
const pathToFile = path.basename(__dirname)+'\\text.txt';

function writeText(pathToFile, answer) {
  if(answer === 'exit'){
    reading.close();
  }
  else
  {
  fs.appendFile(pathToFile, answer, (err) => {
    if (err) {
      console.log(err);
    }
  });
  }
}

reading.question("Hello!\n", (answer) => {
    writeText(pathToFile, answer);
});
reading.on('line', (answer) => {
    writeText(pathToFile, answer);
});
process.on('exit', () => {
  console.log('Bye! <3');
})
