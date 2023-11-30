var express = require('express');
const sweets_controllers= require('../controllers/sweets');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}



//Get Home page
router.get('/', function(req,res,next){
    res.render('sweets',{title:'search result'});
} )



/* GET sweets */
router.get('/', sweets_controllers.sweets_view_all_Page );


//GET request for one sweet
router.get('/sweets/:id',sweets_controllers.sweets_detail);
module.exports = router;

//* GET detail sweets page */
router.get('/detail/', sweets_controllers.sweets_view_one_Page);

/* GET create sweets page */
router.get('/create',secured, sweets_controllers.sweets_create_Page);

/* GET create update page */
router.get('/update',secured, sweets_controllers.sweets_update_Page);

/* GET delete sweets page */
router.get('/delete',secured, sweets_controllers.sweets_delete_Page);


   