import fs from 'fs';
import http from 'http';
import url from 'url';
import path from 'path'
http.createServer(function(req,res){
    var path = url.parse(req.url,true);
    var filename = path.split().slice(0, -1);
    console.log(filename.pathname);
    if(req.url === filename.pathname){
        fs.readFile(req.url+'.html','utf8', (err,data) => {
            if(err){
                console.err(err);
                return
            }
            res.end(data)
        })
    }
}).listen(8080)