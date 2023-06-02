const mongoose = require("mongoose")

const degreeschema = new mongoose.Schema({
    img: String
  });
  
const degree = mongoose.model("degree", degreeschema);

module.exports = {degree,degreeschema}