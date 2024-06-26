import { Request, Response } from "express";
import { Usuario } from "../entities/Usuario";

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.find();
        console.log('usuarios: -->'), usuarios;
        return res.json(usuarios);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}