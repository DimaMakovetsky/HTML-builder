const path = require('path');
const fs = require('fs');
const pathToFolder = path.basename(__dirname)+'\\files';
const pathToFolderCopy = path.basename(__dirname)+'\\files-copy'
fs.mkdir(pathToFolderCopy,{recursive:true},(err)=>{
  if (err) {
    console.log(err);
  }
});

fs.readdir(pathToFolderCopy, {withFileTypes:true}, (err, files) => {
  if(err) {
    console.log(err);
  }
  files.forEach(file => {
    fs.unlink(pathToFolderCopy+"\\"+file.name, () => {
    });
  });
});

fs.readdir(pathToFolder, {withFileTypes:true}, (err, files) => {
  if(err) {
    console.log(err);
  }
  files.forEach(file => {
    fs.copyFile(pathToFolder+"\\" + file.name, pathToFolderCopy + "\\" + file.name,(err) => {
      if (err) {
        console.log(err);
      }
    })
  });
});