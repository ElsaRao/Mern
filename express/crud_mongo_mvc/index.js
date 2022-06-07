import dotenv from 'dotenv'
import express from "express";
import { router } from './route/router.js';
import path from 'path'
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';

dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.API_PORT;
app.use(bodyParser.urlencoded({extended:false}));

app.use('/users', router);
app.set('view engine', 'ejs');
app.use('/cosmetic', express.static(path.join(__dirname, 'public/assets/css')))

// dbData();

app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});
