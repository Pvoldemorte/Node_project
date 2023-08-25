import { SellerDb } from "../models/sellerModel.js";
import { UserDb } from "../models/userModel.js";
import { HashPassword, comparePassword } from "../helpers/authPassword.js";
import jwt from "jsonwebtoken";
const secreate = "afdfdfdfsdfdsf";

export const sellerRegister = async (req, res) => {

    const profile = req.file.path;
    const { name, email, password, role } = req.body;

    console.log(req.body)
    // console.log(req.file,19);
    try {
        const user = await SellerDb.findOne({ email: email })

        if (user) {
            return res.send("seller already exits");
        }

        const hashedpass = await HashPassword(password)

        const newUser = new SellerDb({
            name,
            email,
            password: hashedpass,
            role,
            profileImg: profile
        })

        await newUser.save();
        res.send("new seller register ,thank you");
    } catch {
        res.send("found something wrong");
    }
};



export const sellerLogin = async (req, res) => {

    const { email, password } = req.body;

    try {
        console.log(email);
        console.log(password);


        const user = await SellerDb.findOne({ email: email });

        const existPassword = user.password;

        const passChecking = await comparePassword(password, existPassword)

        console.log(existPassword)
        console.log(passChecking)

        // console.log(hashedpass);

        if (user) {
            // console.log(user.password) 
            if (passChecking) {

                //     jwt.sign({ name: "abhi" }, secreate, { expiresIn: '300s' }, (err, token) => {
                //         // res.status(200).json({
                //         //     token
                //         // })
                //         res.cookie('token',token).json(user);  


                // })

                const webToken = jwt.sign({id:user._id }, process.env.JWT_SECRET, { expiresIn: '35s' });

                // console.log(webToken)

                if (req.cookies[`${user._id}`]) {
                    req.cookies[`${user._id}`] = "";
                  }

                res.cookie(String(user._id), webToken, {
                    path: "/",
                    expires: new Date(Date.now() + 1000 * 30), // 30 seconds
                    httpOnly: true,
                    sameSite: "lax",
                });

                     res
                    .status(200)
                    .json({ message: "Successfully Logged In", user, webToken });

                // res.send({massage:"login successfully",user});
            } else {
                res.send({ massage: "username or password is wrong" });
            }
        }
    } catch (error) {
        res.send("user is not found")
    }

}

 


 export const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    console.log(cookies)
    // const token = cookies.split("=")[1];
    // if (!token) {
    //   res.status(404).json({ message: "No token found" });
    // }
    // jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    //   if (err) {
    //     return res.status(400).json({ message: "Invalid TOken" });
    //   }
    //   console.log(user.id);
    //   req.id = user.id;
    // });
    // next();
  };


  export const getUsers = async (req, res) => {

    // console.log("helllo")

    try {
        const users = await UserDb.find({})
            .then((data) => {
                res.send(data);
            })
    } catch (error) {
        res.send("users not found");
    }
}