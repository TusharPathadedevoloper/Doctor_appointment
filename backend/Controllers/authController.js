import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const register = async(req,res)=>{
   const {name, email, gender, password, role, photo}=req.body
   
    try {
         
     let user=null;
     if(role==='patient'){
        user= await User.findOne({email})
     }else if(role==='doctor'){
        user = await  User.findOne({email})
     }

     if(user){
        return res.status(400).json({message:'user already exist'});
     }

     const salt =bcrytp.genSalt(10)
     const hashpassword= await bcrytp.hash(password,salt)

     if(role==='patient'){
        user=new User({
            name,
            email,
            password:hashpassword,
            gender,
            photo,
            role
        })
     }
     if(role==='doctor'){
        user=new Doctor({
            name,
            email,
            password:hashpassword,
            gender,
            photo,
            role
        })
     }
await user.save()
res.status(200).json({succes:true,message:'user successfully created'})
    } catch (error) {
        res.status(500).json({succes:false,message:'not create user internal server error'})
    }
}



export const login = async(req,res)=>{
  const {email, password }= req.body
    
    try {
        let user =await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"invalid user"})
        } 
        const result bcrypt
        
    } catch (error) {
        
    }
}