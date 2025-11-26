import express from "express"
import { createProduct, getdata, getdataById } from "../Controller/productController.js";

const router=express.Router();

router.get("/getdata",getdata)
router.get("/getdata/:id",getdataById)
router.get("/create",createProduct)

export default router;