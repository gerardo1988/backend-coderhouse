import { Router } from "express";
import * as ProductsController from "../controllers/productsController.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.post("/", ProductsController.saveProduct);
router.delete("/:_id", ProductsController.deleteProduct);
router.get("/:_id", ProductsController.getOneProduct);

export default router;