const mongoose = require("mongoose")
const sweetSchema = mongoose.Schema({
name: String,
price: Number,
quantity: Number
})
module.exports = mongoose.model("sweets",sweetSchema)