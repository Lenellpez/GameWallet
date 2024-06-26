import { Request, Response } from "express";
import { Tarjeta } from "../entities/Tarjeta";

export const getTarjetas = async (req: Request, res: Response) => {
    try {
        const tarjetas = await Tarjeta.find();
        console.log('tarjetas: -->'), tarjetas;
        return res.json(tarjetas);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}