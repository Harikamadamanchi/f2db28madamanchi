var express = require('express'); 
var router = express.Router(); 

// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Student_controller = require('../controllers/Student'); 

/// API ROUTE /// 

// GET resources base. 
router.get('/', api_controller.api); 

/// Student ROUTES /// 

// POST request for creating a Student.  
router.post('/Student', Student_controller.Student_create_post); 

// DELETE request to delete Student. 
router.delete('/Student/:id', Student_controller.Student_delete); 

// PUT request to update Student. 
router.put('/Student/:id', Student_controller.Student_update_put); 

// GET request for one Student. 
router.get('/Student/:id', Student_controller.Student_detail); 

// GET request for list of all Student items. 
router.get('/Student', Student_controller.Student_list); 

router.get('/Student/:id', Student_controller.Student_detail); 

module.exports = router; 

