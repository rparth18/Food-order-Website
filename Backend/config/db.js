import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Tomatopvtltd:Sunivapa20@cluster0.2lwxn2e.mongodb.net/Food-delivery').then(()=>console.log("DB connected"));
}