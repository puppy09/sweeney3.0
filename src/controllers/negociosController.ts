import * as negociosService from '../services/negociosService';
import { Request, Response } from 'express';

export const postNegocio = async (req: Request, res:Response) => {
    try{
        const {nombre} = req.body;
        const idUsuario = (req as any).user.id;
        const nuevoNegocio = await negociosService.createNegocio(nombre, idUsuario);
        if(!nuevoNegocio) {
            return res.status(400).json({ message: "Error al crear el negocio" });
        }
        return res.status(201).json({ message: "Negocio creado exitosamente", nuevoNegocio });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const putNegocio = async (req:Request, res:Response) =>{
    try{
        const {nombre} = req.body;
        const {id_negocio} = req.params;
        let auxNegocio = parseInt(id_negocio);
        
        const negocioActualizado = await negociosService.updateNegocio(auxNegocio, nombre);
        if (!negocioActualizado) {
            return res.status(400).json({ message: "Error al actualizar el negocio" });
        }
        return res.status(200).json({ message: "Negocio actualizado exitosamente", negocioActualizado });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const getNegocios = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const negociosUsuario = await negociosService.getNegociosByUser(userId);
        if (!negociosUsuario) {
            return res.status(404).json({ message: "No se encontraron negocios para este usuario" });
        }
        return res.status(200).json(negociosUsuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const deleteNegocio = async (req: Request, res: Response) => {
    try {
        const { id_negocio } = req.params;
        let auxNegocio = parseInt(id_negocio);
        
        const negocioEliminado = await negociosService.deleteNegocio(auxNegocio);
        if (!negocioEliminado) {
            return res.status(400).json({ message: "Error al eliminar el negocio" });
        }
        return res.status(200).json({ message: "Negocio eliminado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}