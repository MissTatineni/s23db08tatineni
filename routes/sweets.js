var express = require('express');
const sweets_controllers= require('../controllers/sweets');
var router = express.Router();

//Get Home page
router.get('/', function(req,res,next){
    res.render('sweets',{title:'search result'});
} );


/* GET sweets */
router.get('/', sweets_controllers.sweets_view_all_Page );


//GET request for one sweet
router.get('/sweets/:id',sweets_controllers.sweets_detail);
module.exports = router;