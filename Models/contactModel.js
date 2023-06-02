const mongoose = require("mongoose")

const contactschema = new mongoose.Schema({
    name:String,
    link:String
  });
  
const contact = mongoose.model("contact", contactschema);


module.exports = {contact}