// import mongoose from "mongoose";
import { config } from "dotenv";
import cors from 'cors'
import express from "express";
import conectDb from "./database/db.js";
import cookieParser from "cookie-parser";
import users from "./routes/userRoute.js"
import products from "./routes/productRoute.js"


config({ path: "./config/.env" })
conectDb();

const port = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}));
app.use(cors({credentials:true,origin:"*"}));
app.use('/uploads',express.static('uploads'))

app.use('/api/v1/', users)
app.use('/api/v2/', products)


// app.use("/api/register",);

// mongoose.connect("mongodb://localhost:27017/cloneFlipkartDb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("database connected")).catch((err) => console.log(err))

app.listen(port, () => {
    console.log(` successfully connected ${port}`);
})