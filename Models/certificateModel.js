const mongoose = require("mongoose")

const certificateschema = new mongoose.Schema({
    name:String,
    img:String,
    vname:String
  });
  
const certificate = mongoose.model("certificate", certificateschema);

module.exports = {certificate}