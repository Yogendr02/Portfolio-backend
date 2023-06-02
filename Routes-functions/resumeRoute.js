const fs = require("fs");
const multer = require("multer")
var lo = "ok"
const modal = require("../Models/resumeModel")
const resume = modal.resume

exports.upload = ()=>{return multer({
  storage: multer.diskStorage({
      destination: function(req,res,cb){
          cb(null,"resume")
      },
      filename: function(req,file,cb){
          cb(null,"resume"+".png")
      }
  })
}).single("img")}


exports.getfunc = () => {
    return async(req,res)=>{
    const got = await resume.find({})
    res.status(200).send(got);
  }
}



exports.postfunc = ()=>{
  return (req, res) => {
    const g = (fs.readFileSync(("./resume/resume.png"), "base64"));
    const newone = new resume({"name":"resume-photo","img":g})
    newone.save().then(res.send("done sir ji")).catch(err=>{console.log(err)})
  }
  }








