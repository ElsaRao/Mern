import fs from 'fs';
import http from 'http';
import url from 'url';


http.createServer(function(req,res){
    var path = url.parse(req.url,true);
    path = path.pathname
    console.log(path);
    if(req.url === path){
        path = path.slice(1)
        fs.readFile(path+'.html','utf8', (err,data) => {
            if(err){
                console.log(err);
            }
            res.end(data)
        })
    }
}).listen(8001)