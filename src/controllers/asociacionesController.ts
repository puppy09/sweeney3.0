import *  as asociacionesService from '../services/asociacionesService';
import { Request, Response } from 'express';

export const postAsociacion = async(req:Request, res:Response) => {
    try {
        const { id_categoria, id_negocio } = req.body;
        const idUsuario = (req as any).user.id;

        const nuevaAsociacion = await asociacionesService.createAsociacion(id_categoria, id_negocio, idUsuario);
        if (!nuevaAsociacion) {
            return res.status(400).json({ message: "Error al crear la asociación" });
        }
        return res.status(201).json({ message: "Asociación creada exitosamente", nuevaAsociacion });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}