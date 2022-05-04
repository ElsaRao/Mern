import http from 'http'
import fs from 'fs'

// http.createServer(function(req,res){
//     fs.readFile("form.html", function(err,data){
//         if (err){
//             res.writeHead(404);
//             res.end(JSON.stringify(err));
//             return;
//         }
//         res.writeHead(200);
//         res.end(data);
//     })
// }).listen(8080)

http.createServer(function(req,res){
    var writeStream = fs.createWriteStream('./output.txt')
    req.pipe(writeStream);

    fs.readFile('form.html', 'utf-8', (err,data) =>{
        if (err){
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data)
    })
}).listen(8080)