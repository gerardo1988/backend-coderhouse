import { Router } from "express";
import * as JwtController from "../controllers/jwtController.js";

const router = Router();

router.post("/", JwtController.loginUser);

export default router;
