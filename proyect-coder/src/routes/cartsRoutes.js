import { Router } from "express";
import * as CartsController from "../controllers/cartsController.js";

const router = Router();

router.get("/", CartsController.getCarts);
router.post("/save", CartsController.saveCart);
router.delete("/delete/:_id", CartsController.deleteCart);
router.get("/:_id", CartsController.getOneCart);


export default router;