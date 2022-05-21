import express from "express";
import ejs from 'ejs'
import path from 'path';
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

const app = express()
const port = 8000
const __dirname = dirname(fileURLToPath(import.meta.url));

const urlencodeParse = bodyParser.urlencoded({extended:false});

app.set('view engine' , 'ejs')
// app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req,res) => {
    res.render('index')
})
app.post('/postform',urlencodeParse, (req,res) => {
    res.send("Hello" + "" + req.body.name)
})

app.listen(port)