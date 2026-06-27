import express from "express"
import dotenv from "dotenv"
import connectDb from "./lib/db.js"
import User from "./model/user.model.js"
import Redis from "ioredis"
import ratelimitter from "./middleware/ratelimit.js"
import sendEmail from "./lib/sendMail.js" 
import emailQueue from "./queue.js"
dotenv.config()
const port = process.env.PORT || 5000

const app =express()

app.use(express.json())

export const redis= new Redis(process.env.REDIS_URL)

app.get("/",(req,res)=>{
   return res.status(200).json({message:"HELLO FROM docker redis"})
})

app.get("/redis-test",async (req,res)=>{
     const result = await redis.get("users")
     if(result){
          return res.status(200).json({message:"Users fetched from redis",users:JSON.parse(result)})
     }
     const users= await User.find({})
     await redis.set("users",JSON.stringify(users))
     return res.status(200).json({message:"Users fetched",users})
})

app.get("/get",ratelimitter,async(req,res)=>{
   const users= await User.find({})
   return res.status(200).json({message:"Users fetched",users})
})

app.post("/create",async(req,res)=>{
    const {name,email,password}=req.body
    const user=await User.create({name,email,password})
    await redis.del("users")
   //  await sendEmail()
   await emailQueue.add("send-email",{
    to:email,
    subject:"Welcome",
    text:"Welcome to our platform"  
   })
    return res.status(201).json({message:"User created",user})
})

app.post("/send-otp",async(req,res)=>{
   const {email}=req.body
   const otp=Math.floor(100000 + Math.random() * 900000).toString()
   await redis.set(`otp:${email}`,otp,"EX",30)
   return res.status(200).json({message:"OTP sent",otp})
})

app.post("/verify-otp",async(req,res)=>{
   const {email,otp}=req.body
   const storedOtp=await redis.get(`otp:${email}`)
   if(storedOtp===otp){
      await redis.del(`otp:${email}`)
      return res.status(200).json({message:"OTP verified"})
   }
   return res.status(400).json({message:"Invalid OTP"})
})

app.listen(port,()=>{
     connectDb()
     console.log(`server running  on ${port}`)
})