import { Worker } from "bullmq";
import Redis from "ioredis";
import sendEmail from "./lib/sendMail.js";

const connection =new Redis(process.env.REDIS_URL,{maxRetriesPerRequest:null})

const worker = new Worker("emailQueue",async(job)=>{
    console.log("JOB Starterd",job.data.to)
    await sendEmail(job.data)
    console.log("Job Completed:",job.data.to)
},{connection})

