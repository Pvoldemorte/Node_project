import  express from "express";
import multer from "multer";

const upload = multer({ dest: 'uploads/'})
import {getSigleProduct, gettingProducsts, newProduct } from "../controliars/productControlar.js";


const router = express.Router();

router.post("/addProduct",upload.single('produImg'),newProduct)
router.get("/products",gettingProducsts)
router.put("/singleproduct/:id",getSigleProduct)

export default router