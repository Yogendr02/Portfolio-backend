const mongoose = require("mongoose")

const projectschema = new mongoose.Schema({
    name:String,
    link:String,
    github:String
  });
  
const project = mongoose.model("project", projectschema);

module.exports = {project}