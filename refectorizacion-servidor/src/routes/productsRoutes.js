import { Router } from "express";
import * as ProductsController from "../controllers/productsController.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.post("/", ProductsController.saveProduct);

export default router;