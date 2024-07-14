import { Request, Response } from "express";
import { MetodoPago } from "../entities/MetodoPago";

export const getMetodosPago = async (req: Request, res: Response) => {
    try {
        const metodosPago = await MetodoPago.find();
        console.log('metodos de pago: -->'), metodosPago;
        return res.json(metodosPago);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}