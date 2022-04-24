import fs from 'fs'
import path from 'path'
fs.readdir(
    path.join('./', 'MyFolder'),
    (err, files) => {
      if (err) throw err;
      
      files.forEach(file =>{
        console.log(file);
      });
    });
