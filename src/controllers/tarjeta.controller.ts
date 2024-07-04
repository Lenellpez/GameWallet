import { Request, Response } from "express";
import { Tarjeta } from "../entities/Tarjeta";
import { Transaccion } from "../entities/Transaccion";

export const getTarjetas = async (req: Request, res: Response) => {
    try {
        const tarjetas = await Tarjeta.find({
          relations : {
            transacciones:true,     //muestra las las trasnsciones de c/tarjeta
          }
       });
        console.log('tarjetas: -->'), tarjetas;
        
        return res.json(tarjetas);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const registrarTarjeta = async (req: Request, res: Response) => {
    const { saldo,card_number } = req.body;
    try {
        const nuevaTarjeta = Tarjeta.create({ saldo,card_number, transacciones: [] });
        await nuevaTarjeta.save();
        return res.json(nuevaTarjeta);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}


export const recargarSaldo = async (req: Request, res: Response) => {
    const { id, cantidad } = req.body;
    try {
        const tarjeta = await Tarjeta.findOne({ where: { id } });

        if (!tarjeta) {
            return res.status(404).json({ message: "Tarjeta no encontrada" });
        }

        tarjeta.saldo += cantidad; 

        const nuevaTransaccion = Transaccion.create({
            monto: cantidad,
            tipo: "recarga",
            estado: "completado",
            tarjeta: tarjeta
        });

        await nuevaTransaccion.save();
        await tarjeta.save();
        return res.json(tarjeta);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const descontarSaldo = async (req: Request, res: Response) => {
    const { id, cantidad } = req.body;
  
    // Validar entrada
    if (typeof id !== 'number' || id <= 0 || typeof cantidad !== 'number' || cantidad <= 0) {
      return res.status(400).json({ message: 'Id de tarjeta o cantidad inválidos. Ambos deben ser números positivos.' });
    }
  
    try {
      // Buscar la tarjeta por su id
      const tarjeta = await Tarjeta.findOne({ where: { id } });
  
      if (!tarjeta) {
        return res.status(404).json({ message: 'Tarjeta no encontrada.' });
      }
  
      // Verificar saldo suficiente
      if (tarjeta.saldo < cantidad) {
        return res.status(400).json({ message: 'Saldo insuficiente para realizar la operación.' });
      }
       // registrar gasto
      const nuevaTransaccion = Transaccion.create({
        monto: cantidad,
        tipo: "gasto",
        estado: "completado",
        tarjeta: tarjeta
    });
    await nuevaTransaccion.save();
      // Descontar el saldo de la tarjeta
      tarjeta.saldo -= cantidad;
      await tarjeta.save();
  
      return res.json({ message: 'Saldo descontado exitosamente.', tarjeta });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const getTarjeta = async (req: Request, res: Response) => {
    // Obtener el número de tarjeta desde los parámetros de la URL
    const { card_number } = req.params; 
    // Convertir card_number a número
    const cardNumber = Number(card_number);
    if (isNaN(cardNumber)) {
      return res.status(400).json({ message: "Número de tarjeta inválido" });
  }
    try {
      const tarjeta = await Tarjeta.findOne({ where: { card_number: cardNumber }, relations: ['transacciones'] });

        if (!tarjeta) {
            return res.status(404).json({ message: "Tarjeta no encontrada" });
        }

        return res.json(tarjeta);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
