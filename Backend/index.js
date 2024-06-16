import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


const app=express()
const port = process.env.PORT||4000

//middleware  
app.use(express.json())

    const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
Access-Control-Allow-Credentials:true,
};
app.use(cors(corsOpts));



// db connection 
connectDB();
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
      res.send("API Working")
      
    
})


app.listen(port,()=>{
    console.log(`Server started on ${port}`)
    return `${port}`
   
})


