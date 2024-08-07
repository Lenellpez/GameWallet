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

    const existeUsuario = await Usuario.findOne({ where: { nombre: nombre } });

    if (existeUsuario) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

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
    const { nombre, email, contraseña, telefono, rol } = req.body;

    try {
        const usuario = await Usuario.findOneBy({ id: parseInt(id) });
        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

        usuario.nombre = nombre;
        usuario.email = email;
        usuario.contraseña = contraseña;
        usuario.telefono = telefono;
        usuario.rol = rol;

        await usuario.save();
        return res.json(usuario);
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

export const LoguearUsuario = async (req: Request, res: Response) => {

    const { nombre, contraseña } = req.body;

    const usuario = await Usuario.findOne({ where: { nombre: nombre } });

    // Verificar usuario
    if (!usuario) {
        return res.status(404).json({ message: `No se encontro el usuario ${nombre}` });
    }

    // Verificar contraseña
    if (usuario.contraseña !== contraseña) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    return res.json({
        message: 'Login exitoso!',
        usuario: usuario,
    });
};

/*

//export const AutentificarUsuario = async (req: Request, res: Response) => {
//}

*/
