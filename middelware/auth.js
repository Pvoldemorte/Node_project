import jwt from 'jsonwebtoken';
import express from 'express'

const secreate= "afdfdfdfsdfdsf";

 export const authentication = (req,res,next)=>{
  console.log("hello i middleware")
  // jwt.sign({name:"abhi"},secreate,{expiresIn:'300s'},(err, token)=>{
  //      res.status(200).json({
  //       token
  //      })
  // })

  // const webToken = jwt.sign({user},secreate,{expiresIn:'300s'});
// localStorage.setItem('token',webToken)

const currUserToken = req.headers.cookie;
console.log(currUserToken)

// const currenToken = currUserToken.split("=")[1];

// if(!currenToken){
//   res.status(400).json({message:"token not found"})
// }

// jwt.verify(String(currenToken).process.env.JWT_SECRET,(err,user)=>{
//   if(err){
//     res.status(400).json({message:"invalid token"})
//   }
//   // console.log(user.id);
// })

  next();
}




// export const verifyToke = (req,res,next)=>{

//     next();
// }

