import express from "express";
import * as ProductsController from "../controllers/productsController.js";

const router = express.Router();

router.get("/", ProductsController.getProduct);
router.post("/", ProductsController.saveProduct);

export default router;