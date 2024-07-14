import { Router } from "express";
import { actualizarUsuario, borrarUsuario, getUsuarios, LoguearUsuario, registrarUsuario } from "../controllers/usuario.controller";
const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/", registrarUsuario);
router.post("/login", LoguearUsuario);
router.put("/actualizar/:id", actualizarUsuario);
router.delete("/borrar/:id", borrarUsuario);

export default router;
