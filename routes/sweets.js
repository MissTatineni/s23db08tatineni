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

//* GET detail sweets page */
router.get('/detail/', sweets_controllers.sweets_view_one_Page);

/* GET create sweets page */
router.get('/create', sweets_controllers.sweets_create_Page);

/* GET create update page */
router.get('/update', sweets_controllers.sweets_update_Page);

/* GET delete sweets page */
router.get('/delete', sweets_controllers.sweets_delete_Page);

