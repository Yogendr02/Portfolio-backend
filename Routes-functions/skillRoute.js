const modal = require("../Models/skillModel")
const skill = modal.skill


exports.getfunc = () => {
    return async(req,res)=>{
    const got = await skill.find()
    res.send(got);
  }
}

exports.postfunc = ()=>{
  return (req, res) => {
    console.log(req.body)
    const newone = new skill(req.body)
    newone.save().then(res.send("done sir ji")).catch(err=>{console.log(err)})
  }
  }

exports.deletefunc = ()=>{
    return async (req,res)=>{
        console.log(req.body)
        await skill.deleteOne(req.body)
        res.send("deleted successfully")
    }
}





