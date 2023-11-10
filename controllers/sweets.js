var sweets = require('../models/sweets');

// Handle sweets delete form on DELETE.
exports.sweets_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: sweets delete DELETE ' + req.params.id);
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
    // {"name":"goat", "price":12, "quantity":"large"}
    document.name = req.body.name;
    document.price = req.body.price;
    document.quantity = req.body.quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }

   // for a specific sweet.
   exports.sweets_detail = async function(req, res) {
   console.log("detail" + req.params.id)
   try {
   result = await sweets.findById( req.params.id)
   res.send(result)
   } catch (error) {
   res.status(500)
   res.send(`{"error": document for id ${req.params.id} not found`);
   }
   };

   //Handle sweets update form on PUT.
   exports.sweets_update_put = async function(req, res) {
   console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
   try {
   let toUpdate = await sweets.findById( req.params.id)
   // Do updates of properties
   if(req.body.name)
   toUpdate.name = req.body.name;
   if(req.body.price) toUpdate.price = req.body.price;
   if(req.body.quantity) toUpdate.quantity = req.body.quantity;
   let result = await toUpdate.save();
   console.log("Success " + result)
   res.send(result)
   } catch (err) {
   res.status(500)
   res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
   }
   }
   
   