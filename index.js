import dotenv from "dotenv"
import express from "express"
import router from "./Router/productRouter.js"
import cors from "cors"



//configuration
dotenv.config();


//initialization
const app=express();

app.use(cors());


//port number
const port=process.env.PORT

//inbuilt middleware
app.use(express.json());

app.use("/api/products",router)

//listen is used to tell the server in which port it is running
app.listen(port,()=>{
    console.log("server started at 3000");
    
})




//default route
app.get("/",(req,res)=>{
     res.status(200).send("default page")
})