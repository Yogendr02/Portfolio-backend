const mongoose = require("mongoose")

const resumeschema = new mongoose.Schema({
    name:String,
    img:String
  });
  
const resume = mongoose.model("resume",resumeschema );
module.exports = {resume}