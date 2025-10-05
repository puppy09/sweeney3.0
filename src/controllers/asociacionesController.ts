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

export const putAsociacion = async(req:Request, res:Response)=>{
    try{
        const { id_categoria, id_negocio, id_asociacion } = req.body;
        const asociacionActualizada = await asociacionesService.updAsociacion(id_categoria, id_negocio, id_asociacion);
        if (!asociacionActualizada) {
            return res.status(400).json({ message: "Error al actualizar la asociación" });
        }
        return res.status(200).json({ message: "Asociación actualizada exitosamente", asociacionActualizada });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const getAsociaciones = async(req:Request, res:Response) => {
    try {
        const userId = (req as any).user.id;
        const asociacionesUsuario = await asociacionesService.getAsociacionesByUser(userId);
        if (!asociacionesUsuario) {
            return res.status(404).json({ message: "No se encontraron asociaciones para este usuario" });
        }
        return res.status(200).json(asociacionesUsuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
} 

export const deleteAsociacion = async(req:Request, res:Response) => {
    try {
        const { id_asociacion } = req.params;
        let auxAsociacion = parseInt(id_asociacion);
        
        const asociacionEliminada = await asociacionesService.delAsociacion(auxAsociacion);
        if (!asociacionEliminada) {
            return res.status(400).json({ message: "Error al eliminar la asociación" });
        }
        return res.status(200).json({ message: "Asociación eliminada exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}