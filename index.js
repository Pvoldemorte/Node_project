// import express from "express";
// import mongoose from "mongoose";
// import cors from 'cors';

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// mongoose.connect("mongodb://localhost:27017/loginRegistDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("Database Connected")).catch((err) => {
//     console.log(err);
// })

// // const connectToMongo = ()=>{
// //     mongoose.connect("mongodb://localhost:27017/loginRegistDB")
// //         .then(() => console.log('connected to mongo'))
// //         .catch((err) => console.log('Connection failed'));
// // }

// const userSchema = new mongoose.Schema({
//     name: String,
//     userName: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema);

// //Routes

// // app.get("/",(req,res)=>{
// //     res.send("my main api")
// // })
// app.post("/login", async(req, res) => {

//     const {email,password} = req.body;

//     try {
//         console.log(email);
//         console.log(password);
//         const user = await User.findOne({email:email});

//         if(user){
//             // console.log(user.password) 
//             if(password === user.password){
//                 res.send({massage:"login successfully",user});
//             }else{
//                 res.send({massage:"username or password is wrong"});
//             }
//         }
//     } catch (error) {
//         res.send("user is not found")
//     }


//     // res.send("login sucessfuly")
// })




// app.post("/register", async (req, res) => {

//     const { name, userName, email, password } = req.body;


//     // const user = new User({
//     //     name,
//     //     userName,
//     //     email,
//     //     password
//     // })
//     // user.save();
//     // res.send("register successfuly")
//     // console.log(User)



//     try {
//         const user = await User.findOne({ email: email });
//         // console.log(user);
//         if (user) {
//             // console.log(user.password)
//             return res.send("user already registration");
//         }

//         const newUser = new User({
//             name,
//             userName,
//             email,
//             password
//         })
//         await newUser.save();
//         res.send("register successfuly")

//     } catch (error) {
//         //    res.send("something went wrong")
//         console.log("something went wrong")
//     }

// })
// // console.log(req.body);
// // res.send("register successfuly")


// app.listen(9002, () => {
//     console.log("be started port on 9002")
// })