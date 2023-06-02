const modal = require("../Models/contactModel")
const contact = modal.contact


exports.getfunc = () => {
    return async(req,res)=>{
    const got = await contact.find({})
    res.status(200).send(got);
  }
}

exports.postfunc = ()=>{
  return (req, res) => {
    console.log(req.body)
    const newone = new contact(req.body)
    newone.save().then(res.send("done sir ji")).catch(err=>{console.log(err)})
  }
  }

exports.deletefunc = ()=>{
    return async (req,res)=>{
        console.log(req.body)
        await contact.deleteOne(req.body)
        res.send("deleted successfully")
    }
}





