import mongoose from "mongoose";
import  dotenv from "dotenv";

// import cors from 'cors'
// import express from "express";

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

dotenv.config();
const conectDb = ()=>{
    console.log(process.env.DATABASE);
    const conn = mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("database connected")).catch((err) => console.log(err))
}

export default conectDb;


// app.listen(4000, () => {
//     console.log("new database successfully connected");
// })