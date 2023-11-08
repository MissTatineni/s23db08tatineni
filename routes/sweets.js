var express = require('express');
const sweets_controllers= require('../controllers/sweets');
var router = express.Router();
/* GET costumes */
router.get('/', sweets_controllers.sweets_view_all_Page );
module.exports = router;
