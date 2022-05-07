import http from 'http'
import fs from 'fs'
import path  from 'path';

let stream = (req,res) => {
    const __dirname = path.resolve();
    var writeStream = fs.createWriteStream('./output.txt')
    
    fs.readFile(__dirname+'/form.html', 'utf-8', (err,data) =>{
        if (err){
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200,{"content-type":"text/html"});
        res.end(data)
    });
    req.pipe(writeStream);
}
http.createServer(stream).listen(8080)