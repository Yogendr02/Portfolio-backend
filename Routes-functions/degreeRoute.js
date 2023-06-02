const fs = require("fs");
const multer = require("multer")
var lo = "ok"
const modal = require("../Models/degreeModel")

exports.upload = ()=>{return multer({
  storage: multer.diskStorage({
      destination: function(req,res,cb){
          cb(null,"degree")
      },
      filename: function(req,file,cb){
          cb(null,"degree"+".png")
      }
  })
}).single("degree")}

exports.getfunc = () => {
    return (req,res)=>{
    res.status(200).send("hello ji");
  }
}

exports.postfunc = ()=>{
  return async(req, res) => {
    // await setTimeout(()=>{console.log("good")},1000)
    const g = (fs.readFileSync("./degree/degree.png", "base64"));
    const vimal = new modal.degree({"img":g});
    vimal.save().then(()=>{
      console.log("booyah")
    })
    const bill = 'data:image/png;base64,'+g
    res.send(bill)
  }
  }

exports.getshow = ()=>{
  return async(req, res) => {
    degrees = await modal.degree.find();
    if(degrees[0]===undefined){
      console.log("no worries")
      res.status(400)
    }else{
      // console.log(degrees[0].img,"okkk")
      const bill = 'data:image/png;base64,'+degrees[0].img
      res.send(bill);
      res.status(200)
    }

  }
}



