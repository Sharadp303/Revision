const sendEmail= async (data)=>{
    await new Promise((resolve)=>{
     setTimeout(resolve,5000)  
    })

    console.log("TASk COmpleted",data)
}

export default sendEmail
