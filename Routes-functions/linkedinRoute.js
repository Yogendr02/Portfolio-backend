const fs = require("fs");
const multer = require("multer")
var lo = "ok"
const modal = require("../Models/linkedinModel")
const linkedin = modal.linkedin

exports.upload = ()=>{return multer({
  storage: multer.diskStorage({
      destination: function(req,res,cb){
          cb(null,"linkedin")
      },
      filename: function(req,file,cb){
          cb(null,"linkedin"+".png")
      }
  })
}).single("img")}


exports.getfunc = () => {
    return async(req,res)=>{
    const got = await linkedin.find({})
    res.status(200).send(got);
  }
}

var g;

exports.postfunc = ()=>{
  return async(req, res) => {
    try{
      await linkedin.deleteOne({"name":"linkedin-photo"})
    }finally{
      g = (fs.readFileSync(("./linkedin/linkedin.png"), "base64"));
      const newone = new linkedin({"name":"linkedin-photo","img":g})
      newone.save().then(res.send("done sir ji")).catch(err=>{console.log(err)})
    }

  }
  }







