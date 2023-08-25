import { UserDb } from "../models/userModel.js";
import { HashPassword, comparePassword } from "../helpers/authPassword.js";
import jwt  from "jsonwebtoken";
const secreate= "afdfdfdfsdfdsf";

export const register = async (req, res) => {

    // const profile = req.file.path;
    const { name, userName, email, password, mobileNumber, address } = req.body;


    // console.log(req.file,19);
    // console.log(req.body,202);
    try {
        const user = await UserDb.findOne({ email: email })

        if (user) {
            return res.send("user already exits");
        }

        const hashedpass = await HashPassword(password)

        const newUser = new UserDb({
            name,
            // userName,
            email,
            password: hashedpass,
            mobileNumber,
            // address,
            // profileImg: profile
        })

        await newUser.save();
        res.send("new user register ,thank you");
    } catch {
        res.send("found something wrong");
    }
};



export const login = async (req, res) => {

    const { email, password } = req.body;
    console.log(req.body.password)

    // localStorage.setItem("user email",email)

    try {
        const user = await UserDb.findOne({ email: email });
    
        if (user) {
            const existPassword = user.password;
            const passChecking = await comparePassword(password, existPassword);
    
            if (passChecking) {
                const webToken = jwt.sign({ user }, process.env.JWT_SECRET);
    
                res
                    .status(200)
                    .send({ message: "Successfully Logged In", user, webToken });
            } else {
                res.status(401).send({ message: "Username or password is wrong" });
            }
        } else {
            // If user is not found, send an appropriate response
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        // Handle other errors (database connection, etc.)
        console.error("Error:", error); // Add this line to log the error
        res.status(500).send("An error occurred: " + error.message);
    }
    

}


// export const getUsers = async (req, res) => {

//     // console.log("helllo")

//     try {
//         const users = await UserDb.find({})
//             .then((data) => {
//                 res.send(data);
//             })
//     } catch (error) {
//         res.send("users not found");
//     }
// }

export const getSingleUser = async (req, res) => {

    // console.log("helllo")
    const { id } = req.params;
    const {token} = req.cookies; 

    console.log(token)

    try {
        const users = await UserDb.findOne({ _id: id })
            .then((data) => {
                res.send(data);
            })
    } catch (error) {
        res.send("users not found");
    }
}
export const deleteUser = async (req, res) => {

    const { id } = req.params;

    console.log("helllo")

    try {
        const users = await UserDb.findByIdAndDelete({ _id: id })
            .then((data) => {
                res.send(data);
            })
    } catch (error) {
        res.send("users not found");
    }
}


export const editUser = async (req, res) => {


    const profile = req.file.path;
    const { id } = req.params;
    console.log(id);
    const { name, userName, email, password } = req.body;

    console.log("helllo", 12)

    try {
        // const user = await UserDb.findOne({ _id: id })
        const updateUser = await UserDb.findOneAndUpdate({ _id: id }, {
            $set: {
                name,
                userName,
                email,
                password,
                profileImg: profile
            }
        }, { new: true });

        //     , {
        //     name,
        //     userName,
        //     email,
        //     password,
        //     profileImg
        // }, {
        //     new: true
        // })

        // then((data) => {
        //     res.send(data);
        // })
        //   console.log(user);
        //  user = new UserDb({
        //     name,
        //     userName,
        //     email,
        //     password,
        //     profileImg:profile
        // })


        await updateUser.save();

        res.send("USER UPDATED");

    } catch (error) {
        res.send("users not found");
    }
}

