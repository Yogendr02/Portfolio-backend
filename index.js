const express = require("express")
const app = express()
const fs = require("fs")
const g = fs.readFileSync("info.json",'utf-8')
const cors = require("cors")
require("dotenv").config()

app.use(cors())
const mongoose = require("mongoose")
const db = 'mongodb+srv://yoyo-Py-1:EvnIbpgDA4PgtuFf@cluster0.jp8f5w9.mongodb.net/?retryWrites=true&w=majority'

const gymschema = new mongoose.Schema({
    id:{type:Number,unique:true},
    name:{type:String,unique:true},
    type:{type:String,unique:true},
    desc:{type:String,unique:true},
    img:{type:String,unique:true},
    vdo:{type:String,unique:true},})

var gym = mongoose.model("gym",gymschema);
var gymg;

const pri = async ()=>{
    try{
        await mongoose.connect(db).then(con=>{console.log("connected")})
        await gym.create(JSON.parse(g));
        gymg = await gym.find()
        console.log(gymg)
        await app.get("/gym-info",(req,res)=>{
            res.status(200).json(gymg)
        })
    }
    finally{console.log("ye kya ho gaya")}
}


pri()
console.log(process.env.PORT)

app.get('/',(req,res)=>{
    res.status(200).send("hello ji")
})


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`app running on ${port}`)
})

