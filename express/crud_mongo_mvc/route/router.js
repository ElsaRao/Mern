import express from 'express'
import {homepage, updateView, create, update, deleteUser} from '../controller/controller.js'
const router = express.Router();

//Home route
router.get('/',homepage);

// Add view route
router.get('/add', (req, res) => {
  res.render('adduser.ejs')
});

// Add view route
router.get('/update/:id', updateView);
router.post('/add',create);
router.post('/update/:id',update);
// router.get('/delete',deleteView)
router.get('/delete/:id',deleteUser);

export { router };