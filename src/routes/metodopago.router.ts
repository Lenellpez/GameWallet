import { Router } from "express";
import { getMetodosPago } from "../controllers/metodopago.controller";
const router = Router();

router.get("/metodosPago", getMetodosPago);

export default router;