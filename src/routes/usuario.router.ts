import { Router } from "express";
import { actualizarUsuario, borrarUsuario, getUsuarios, registrarUsuario } from "../controllers/usuario.controller";
const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/usuario", registrarUsuario);
router.put("/usuario/:id", actualizarUsuario);
router.delete("/usuario/:id", borrarUsuario);

export default router;