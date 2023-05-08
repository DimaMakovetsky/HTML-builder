const path = require('path');
const fs = require('fs');
const pathToFolder = path.basename(__dirname)+'\\secret-folder';
fs.readdir(pathToFolder, {withFileTypes:true}, (err, files) => {
  if(err) {
    console.log(err);
  }
  files.forEach(file => {
    fs.stat(pathToFolder+"\\"+file.name,(err, fileStats) => {
      if (err) {
        console.log(err);
      }
      
      if(!fileStats.isDirectory())
      {
        console.log(path.parse(file.name).name + " - " + path.extname(file.name) + " - " + fileStats.size);
      }
    })
  });
});
