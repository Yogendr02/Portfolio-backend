const mongoose = require("mongoose")

const linkedinschema = new mongoose.Schema({
    name:String,
    img:String
  });
  
const linkedin = mongoose.model("linkedin", linkedinschema);
module.exports = {linkedin}