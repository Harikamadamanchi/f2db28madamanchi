var express = require('express');
var router = express.Router();

const Student_controllers = require('../controllers/Student');
/* GET home page. */
router.get('/',Student_controllers.Student_view_all_Page);
/* GET detail costume page */ 
router.get('/detail', Student_controllers.Student_view_one_Page); 

module.exports = router;