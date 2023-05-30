const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")

require('dotenv').config()
app.use(express.json())
app.use(cors())

const bizProSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const BizPro=mongoose.model("BizPro", bizProSchema)

app.post("/bizpro", async (req,res)=>{
    const newBizpro= new BizPro({
        ...req.body
    })
    await newBizpro.save()
    res.send(newBizpro)
})

app.get("/bizpro", async (req,res)=>{
    const data=await BizPro.find()
    res.send(data)
})

app.get("/bizpro/:id", async(req,res)=>{
    const {id}=req.params
    const target= await BizPro.findById(id)
    res.send(target)
})

app.delete("/bizpro/:id", async (req,res)=>{
    const {id}=req.params
    await BizPro.findByIdAndDelete(id)
    res.send("product has been deleted")
})

mongoose.connect(process.env.DB_CONNECT).then(res=>{
    console.log("DB CONNECTED")
})

app.listen(process.env.PORT, ()=>{
    console.log("APP RUNNING")
})








