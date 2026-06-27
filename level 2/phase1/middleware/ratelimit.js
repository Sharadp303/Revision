import { redis } from "../index.js"

const ratelimitter= async (req,res,next)=>{

    const ip=req.ip
    const key=`rate_limit:${ip}`

    const count=await redis.incr(key)
   
    console.log(count)

    if(count ===1){
        await redis.expire(key,60)
    }

    if(count>5){
        return res.status(429).json({message:"Too Many Requests"})
    }
    
    next()
    
}

export default ratelimitter
