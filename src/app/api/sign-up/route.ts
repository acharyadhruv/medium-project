import dbConnect from "@/lib/dbconnect";
import UserModel from "@/model/User";
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { response } from "express";
import { register } from "module";

export async function POST(request : Request) {
    await dbConnect()


    try {
        const {username, email, password} = await request.json()
       const existingUserVerifiefByUsername =  await UserModel.findOne({
            username,
            isVerified : true
        })
        if (existingUserVerifiefByUsername){
            return response.json ({
                success : false,
                message : "'username is already taken'"
            }, {status : 400})
        }
      const existingUserByemail = await UserModel.findOne({email})
      if (existingUserByemail){
      
       true

      } else {
       const hasedPassword  = await bcrypt.hash(password,10)
       const expiryDate = new Date()
       expiryDate.setHours(expiryDate.getHours() +1)
      }
      new UserModel ({
        username ,
        email ,
        password : hashed,
        verifyCode: string,
        verifyCodeExpiry : Date ,
        isVerified: boolean;
        isAcceptingMessage : boolean,
        messages : Message[]      

      })


    }
    catch (error){
        console.log("error while registering user",error)
       response.json({
         success : false ,
         message : "error registering user"
       })
       {
        status : 500
       }
    }
    
}