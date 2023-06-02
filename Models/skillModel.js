const mongoose = require("mongoose")

const skillschema = new mongoose.Schema({
    name:String,
    link:String
  });
  
const skill = mongoose.model("skill", skillschema);

module.exports = {skill}