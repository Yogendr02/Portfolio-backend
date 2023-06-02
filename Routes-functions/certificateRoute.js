const fs = require("fs");
const multer = require("multer")
var lo = "ok"
const modal = require("../Models/certificateModel")
const certificate = modal.certificate
var r
exports.upload = ()=>{ r =  (Math.random() + 1).toString(36).substring(7)

  return multer({
  storage: multer.diskStorage({
      destination: function(req,res,cb){
          cb(null,"certificates")
      },
      filename: function(req,file,cb){
          cb(null,r+".png")
      }
  })
}).single("img")}


exports.getfunc = () => {
    return async(req,res)=>{
    const got = await certificate.find({})
    res.send(got);
  }
}

exports.postfunc1 = ()=>{
  return (req, res) => {
    const g = (fs.readFileSync((`./certificates/${r}.png`), "base64"));
    const newone = new certificate({"name":req.body.name,"img":g,"vname":r})
    newone.save().then(res.send("done sir ji")).catch(err=>{console.log(err)})
  }
  }

exports.postfunc2 = ()=>{
    return (req, res) => {
      res.send("all good")
    }
    }

exports.deletefunc = ()=>{
    return async (req,res)=>{
        const b = await certificate.findOne(req.body)
        await certificate.deleteOne(req.body)
        fs.unlinkSync(`./certificates/${b.vname}.png`)   
        res.send("deleted successfully")
    }
}





