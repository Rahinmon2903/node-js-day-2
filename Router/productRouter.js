import express from "express"
import { getdata, getdataById } from "../Controller/productController.js";

const router=express.Router();

router.get("/getdata",getdata)
router.get("/getdata/:id",getdataById)

export default router;