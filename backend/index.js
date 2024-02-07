import  express  from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const app =express()

const port =process.env.PORT || 5000
 
const corsOption={
    origin:true
}

app.get('/',( req,res)=>{
     res.send('Api is working')
})

mongoose.set('strict', false);
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL );
        console.log('connection is successfully created');
    } catch (error) {
        console.log('err in connection')
    }
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOption))

app.listen(port, ()=>{
    connectDB();
    console.log('server is running on port '+ port)
})