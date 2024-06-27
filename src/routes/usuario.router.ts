import { Router } from "express";
import { actualizarUsuario, borrarUsuario, getUsuarios, registrarUsuario } from "../controllers/usuario.controller";
const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/", registrarUsuario);
router.put("/actualizar/:id", actualizarUsuario);
router.delete("/borrar/:id", borrarUsuario);

export default router;