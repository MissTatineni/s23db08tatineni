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
// Handle Costume update form on PUT.
exports.sweets_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: sweets update PUT' + req.params.id);
};

// List of all Costumes
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
   