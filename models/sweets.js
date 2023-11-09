const mongoose = require("mongoose")
const sweetSchema = mongoose.Schema({
sweets_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("sweets",sweetSchema)