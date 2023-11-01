import { Router } from "express";
import * as ProductsController from "../controllers/productsController.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.post("/", ProductsController.saveProduct);
router.get("/:_id", ProductsController.getOneProduct);
router.delete("/:_id", ProductsController.deleteProduct);


export default router;