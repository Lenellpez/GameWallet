import { Request, Response } from "express";
import { Transaccion } from "../entities/Transaccion";

export const getTransacciones = async (req: Request, res: Response) => {
    try {
        const transacciones = await Transaccion.find();
        console.log('transacciones: -->'), transacciones;
        return res.json(transacciones);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}