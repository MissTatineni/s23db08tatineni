var sweets = require('../models/sweets');
// List of all sweets
exports.sweets_list = function(req, res) {
 res.send('NOT IMPLEMENTED: sweets list');
};
// for a specific sweets.
exports.sweets_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: sweets detail: ' + req.params.id);
};
// Handle sweets create on POST.
exports.sweets_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: sweets create POST');
};
// Handle sweets delete form on DELETE.
exports.sweets_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: sweets delete DELETE ' + req.params.id);
};
// Handle sweets update form on PUT.
exports.sweets_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: sweets update PUT' + req.params.id);
};

// List of all sweets
exports.sweets_list = async function(req, res) {
    try{
    thesweets = await sweets.find();
    res.send(thesweets);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

   // VIEWS
// Handle a show all view
exports.sweets_view_all_Page = async function(req, res) {
 try{
 thesweets = await sweets.find();
 res.render('sweets', { title: 'sweets Search Results', results: thesweets });
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};

// Handle sweets create on POST.
exports.sweets_create_post = async function(req, res) {
    console.log(req.body)
    let document = new sweets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"sweets_type":"goat", "cost":12, "size":"large"}
    document.sweets_type = req.body.sweets_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
   