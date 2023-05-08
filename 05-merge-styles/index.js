const path = require('path');
const fs = require('fs');
const pathToStylesFolder = path.basename(__dirname)+'\\styles';
const pathToResultFolder = path.basename(__dirname)+'\\project-dist';
fs.unlink(pathToResultFolder + '\\bundle.css', (err) => {
}) 
fs.readdir(pathToStylesFolder, {withFileTypes:true}, (err, files) => {
  if(err) {
    console.log(err);
  }
  files.forEach((file, index) => {
    if (path.extname(file.name) === '.css')
    {
      fs.readFile(pathToStylesFolder+'\\'+file.name, (err, data) => {
        fs.appendFile(pathToResultFolder + '\\bundle.css',data.toString(), (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    }   
  });
});
