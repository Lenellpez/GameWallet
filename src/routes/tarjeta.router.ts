import { Router } from "express";
import { getTarjetas,registrarTarjeta,recargarSaldo,descontarSaldo,getTarjeta} from "../controllers/tarjeta.controller";
const router = Router();

router.get("/", getTarjetas);
router.post("/", registrarTarjeta);
router.put("/recarga",recargarSaldo);
router.put("/descontar",descontarSaldo);
router.get("/:card_number",getTarjeta);
export default router;