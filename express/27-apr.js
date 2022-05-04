import express  from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;

app.get('/user/:id(\\d+)/form',function(req,res){
    res.sendFile(__dirname+'/form.html',function(err,data){
        res.send(data);
    })
})
app.listen(port)