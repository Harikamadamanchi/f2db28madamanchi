var express = require('express');
var router = express.Router();

const Student_controllers = require('../controllers/Student');
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/',Student_controllers.Student_view_all_Page);
/* GET detail costume page */ 
router.get('/detail', Student_controllers.Student_view_one_Page);
/* GET create costume page */ 
router.get('/create', Student_controllers.Student_create_Page);
/* GET create update page */ 
router.get('/update', Student_controllers.Student_update_Page);
/* GET delete costume page */ 
router.get('/delete', Student_controllers.Student_delete_Page); 

module.exports = router;