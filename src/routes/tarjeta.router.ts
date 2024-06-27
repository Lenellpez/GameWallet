import { Router } from "express";
import { getTarjetas,registrarTarjeta,recargarSaldo,descontarSaldo} from "../controllers/tarjeta.controller";
const router = Router();

router.get("/", getTarjetas);
router.post("/", registrarTarjeta);
router.put("/recarga",recargarSaldo);
router.put("/descontar",descontarSaldo);

export default router;