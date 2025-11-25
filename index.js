import dotenv from "dotenv"
import express from "express"




dotenv.config();

const app=express();

const port=process.env.PORT

app.use(express.json());

app.listen(port,()=>{
    console.log("server started at 3000");
    
})

app.get("/",(req,res)=>{
     res.status(200).send("default page")
})