import { Router } from "express";
import { getTransacciones } from "../controllers/transaccion.controller";
const router = Router();

router.get("/usuarios", getTransacciones);

export default router;