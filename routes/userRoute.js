import express from "express";
// import { upload } from "../server.js";
import multer from "multer";
const upload = multer({ dest: 'uploads/'})

import {  deleteUser, editUser, getSingleUser, login, register } from "../controliars/userControler.js";
import { sellerRegister, sellerLogin, verifyToken, getUsers } from "../controliars/sellerControlar.js";
import { authentication } from "../middelware/auth.js";



const router = express.Router();

// router.route("/").post(register); 
router.post("/registration",upload.single('profileImg'),register)
router.post("/login",login)
router.get("/allUsers",verifyToken, getUsers)
router.get("/singleUser/:id",getSingleUser)
router.delete("/deleteUser/:id",deleteUser)
router.put("/editUser/:id",upload.single('profileImg'),editUser)


router.post("/sellerRegistration",upload.single('profileImg'),sellerRegister)
router.post("/sellerLogin",sellerLogin)

// router.post("/addProduct",upload.single('produImg'),newProduct)
// router.get("/products",gettingProducsts)

// router.route("/").get((req, res) => {
//     res.send("first api created")
// });

export default router;
// module.exports = router;