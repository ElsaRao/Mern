import express from "express";
import ejs from 'ejs';
import path from 'path';
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

const app = express()
const port = 8000
const __dirname = dirname(fileURLToPath(import.meta.url));

const urlencodeParse = bodyParser.urlencoded({extended:false});

app.set('view engine' , 'ejs')
app.get('/' , (req,res) => {
    res.render('pages/login')
})
app.post('/postform',urlencodeParse, (req,res) => {
    let users = [
        {name : "Elsa" ,email : "elsa@gmail.com"},
        {name : "Yusra" , email : "yusra@gmail.com"},
        {name : "Nisa", email : "nisa@gmail.com"},
        {name :"Hiba" , email : "hiba@gmail.com"}
]
if(req){
//    let name = req.body.name;
    const user = users.find(({name}) => name === req.body.name)
    console.log(user)
    // let userId = users.find(({id}) => id === id)
        // console.log(userId.id)
        console.log(req.body.name)
        if(user.name == req.body.name && user.email == req.body.email){
        res.render( 'pages/user' ,{"user":users})}
        else{
            res.send("Invalid User")
        }
        res.end()
    }
    // res.send("Hello" + "" + req.body.name)
    })


app.listen(port)