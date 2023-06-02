const modal = require("../Models/projectModel")
const project = modal.project


exports.getfunc = () => {
    return async(req,res)=>{
    const got = await project.find({})
    res.status(200).send(got);
  }
}

exports.postfunc = ()=>{
  return (req, res) => {
    console.log(req.body)
    const newone = new project(req.body)
    newone.save().then(res.send("done sir ji")).catch(err=>{console.log(err)})
  }
  }

exports.patchfunc = ()=>{
    return async (req,res)=>{
        const filter = {"name":req.body.name}
        const update = {"link":req.body.link}
        await project.updateOne(filter,update)
        res.send("updated successfully")
    }
}

exports.deletefunc = ()=>{
    return async (req,res)=>{
        console.log(req.body)
        await project.deleteOne(req.body)
        res.send("deleted successfully")
    }
}





