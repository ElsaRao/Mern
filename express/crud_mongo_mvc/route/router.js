import express from 'express'
import {homepage, updateView, create, update, deleteUser,deleteView} from '../controller/controller.js'
import axios from 'axios';
const router = express.Router();

//Home route
router.get('/',homepage);

// Add view route
router.get('/add', (req, res) => {
  res.render('../views/adduser.ejs')
});

// Add view route
router.get('/update/:id', updateView);
router.post('/add',create);
router.post('/update/:id',update);
router.get('/delete',deleteView)
router.post('/delete',deleteUser);

export { router };