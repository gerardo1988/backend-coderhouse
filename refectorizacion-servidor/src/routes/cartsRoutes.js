import { Router } from "express";
import * as CartsController from "../controllers/cartsController.js";

const router = Router();

router.get("/", CartsController.getCarts);
router.post("/", CartsController.saveCart);

/*router.get("/:cid", CartsController.getCartById);
router.delete("/:cid/products/:pid", CartsController.removeProductFromCart);
router.put("/:cid", CartsController.updateCart);
router.put("/:cid/products/:pid", CartsController.updateProductQuantity);
router.delete("/:cid", CartsController.removeAllProductsFromCart);*/


export default router;