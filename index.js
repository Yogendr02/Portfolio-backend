const express = require("express");
const app = express();
const degreefunc = require("./Routes-functions/degreeRoute")
const skillfunc = require("./Routes-functions/skillRoute")
const certificatefunc = require("./Routes-functions/certificateRoute")
const projectfunc = require("./Routes-functions/projectRoute")
const contactfunc = require("./Routes-functions/contactRoute")
const linkedinfunc = require("./Routes-functions/linkedinRoute")
const resumefunc = require("./Routes-functions/resumeRoute")
const cors = require("cors");
require("dotenv").config();
app.use(express.json())

app.use(cors());
const mongoose = require("mongoose");
const db = "mongodb+srv://Yogendra:RNQBnIdvCOPfwcAg@cluster0.rtbc9hz.mongodb.net/?retryWrites=true&w=majority";


const pri = async()=>{
  await mongoose.connect(db)

  
  app.get("/",degreefunc.getfunc());

  app.post("/degree", degreefunc.upload(),degreefunc.postfunc());
  
  app.get("/showdegree", degreefunc.getshow()) 
  
  app.get("/skill",skillfunc.getfunc());
  
  app.post("/sendskill",skillfunc.postfunc());

  app.delete("/deleteskill", skillfunc.deletefunc()) 

  app.get("/certificates",certificatefunc.getfunc());
  
  app.post("/sendcertificatedetails",certificatefunc.postfunc1());

  app.post("/sendcertificate",certificatefunc.upload(),certificatefunc.postfunc2());

  app.delete("/deletecertificate", certificatefunc.deletefunc()) 

  app.get("/projects",projectfunc.getfunc());
  
  app.post("/sendproject",projectfunc.postfunc());

  app.patch("/updateproject",projectfunc.patchfunc());

  app.delete("/deleteproject", projectfunc.deletefunc()) 

  app.get("/contact",contactfunc.getfunc());
  
  app.post("/sendcontact",contactfunc.postfunc());

  app.delete("/deletecontact", contactfunc.deletefunc()) 

  app.get("/linkedin",linkedinfunc.getfunc());
  
  app.post("/sendlinkedin",linkedinfunc.upload(),linkedinfunc.postfunc());

  app.get("/resume",resumefunc.getfunc());
  
  app.post("/sendresume",resumefunc.upload(),resumefunc.postfunc());
}

pri()

console.log(process.env.PORT);




const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
