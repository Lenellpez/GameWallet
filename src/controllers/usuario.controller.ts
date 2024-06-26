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

export const registrarUsuario = async (req: Request, res: Response) => {
    const { nombre, email, contraseña, telefono, rol } = req.body;

    const usuario = new Usuario();
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.contraseña = contraseña;
    usuario.telefono = telefono;
    usuario.rol = rol;
    
    await usuario.save();

    return res.json(usuario);
};

export const actualizarUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findOneBy({ id: parseInt(id) });
        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

        await Usuario.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }    
}

export const borrarUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Usuario.delete({ id: parseInt(id) })

        if (result.affected === 0)
            return res.status(404).json({ message: "Usuario no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
/*
//export const LoguearUsuario = async (req: Request, res: Response) => {
//}

//export const AutentificarUsuario = async (req: Request, res: Response) => {
//}

*/

