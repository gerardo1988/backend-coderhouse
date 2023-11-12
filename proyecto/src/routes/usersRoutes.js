import { Router } from "express";
import * as UsersController from "../controllers/usersController.js";

const router = Router();

router.get("/get", UsersController.getUsers);
router.post("/save", UsersController.saveUser);
router.delete("/:_id", UsersController.deleteUser);
router.get("/:_id", UsersController.getOneUser);

export default router;