import { Router } from "express";
import { getTarjetas } from "../controllers/tarjeta.controller";
const router = Router();

router.get("/tarjetas", getTarjetas);

export default router;