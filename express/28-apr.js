import express  from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
// import urlencoded from "body-parser/lib/types/urlencoded";
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(bodyParser.urlencoded({ extended: false }));
const urlencodeParse = bodyParser.urlencoded({extended:false});

const port = 8001;

app.get('/form',function(req,res){
    res.sendFile(__dirname+'/form-2.html',function(err,data){
        res.send(data);
    })
})
app.post('/postdata',urlencodeParse, (req, res) => {
    if(req){
        // console.log(req.body)
        var userEmail = "elsa@gmail.com"
        if(req.body.email == userEmail){
            res.send("Hello"+ "" + req.body.username);
        }
        else{res.send("Invalid email")}
    }
  });
// app.listen(port)
app.listen(port, () => console.log(`This app is listening on port ${port}`));