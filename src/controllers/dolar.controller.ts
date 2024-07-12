import { Request, Response } from "express";


export const getDolar = async (req: Request, res: Response) => {
    try {
     //Cotización del dólar estadounidense en el mercado paralelo o informa
      const dolarResponse = await fetch('https://dolarapi.com/v1/dolares');
      const dolarInfo = await dolarResponse.json();
      // Devolver la información dolar como respuesta
      console.log('Información dolar:', dolarInfo);
      return res.json(dolarInfo);
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
  };
