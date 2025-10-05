import { Request, Response } from "express";
import * as movimientosService from "../services/movimientosService";

export const postMovimiento = async (req: Request, res: Response) => {
    try{
        const { id_categoria, id_negocio, monto, movimiento } = req.body;
        const idUsuario = (req as any).user.id;

        const nuevoMovimiento = await movimientosService.createMovimiento(id_categoria, id_negocio, monto, movimiento, idUsuario);
        if (!nuevoMovimiento) {
            return res.status(400).json({ message: "Error al crear el movimiento" });
        }
        return res.status(201).json({ message: "Movimiento creado exitosamente", nuevoMovimiento });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const putMovimiento = async (req:Request, res:Response) => {
    try{
        const { id_categoria, id_negocio, monto, movimiento, id_mov } = req.body;
        const movimientoActualizado = await movimientosService.updateMovimiento(id_mov, id_categoria, id_negocio, monto, movimiento);
        if (!movimientoActualizado) {
            return res.status(400).json({ message: "Error al actualizar el movimiento" });
        }
        return res.status(200).json({ message: "Movimiento actualizado exitosamente", movimientoActualizado });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getMovimientos = async (req:Request, res:Response) => {
    try{
        const userId = (req as any).user.id;
        const movimientosUsuario = await movimientosService.getMovimientosByUser(userId);
        if (!movimientosUsuario) {
            return res.status(404).json({ message: "No se encontraron movimientos para este usuario" });
        }
        return res.status(200).json(movimientosUsuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getMovimientosByCat = async (req:Request, res:Response) => {
    try{
        const { id_categoria } = req.params;
        let auxcat = parseInt(id_categoria);
        const userId = (req as any).user.id;
        const movimientosCategoria = await movimientosService.getMovimientosByCategoria(auxcat, userId);
        if (!movimientosCategoria) {
            return res.status(404).json({ message: "No se encontraron movimientos para esta categoría" });
        }
        return res.status(200).json(movimientosCategoria);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getMovimientosByNegocio = async (req:Request, res:Response) => {
    try{
        const { id_negocio } = req.params;
        let auxneg = parseInt(id_negocio);
        const userId = (req as any).user.id;
        const movimientosNegocio = await movimientosService.getMovimientosByNegocio(auxneg, userId);
        if (!movimientosNegocio) {
            return res.status(404).json({ message: "No se encontraron movimientos para este negocio" });
        }
        return res.status(200).json(movimientosNegocio);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deleteMovimiento = async (req:Request, res:Response) => {
    try{
        const { id_mov } = req.params;
        let auxmov = parseInt(id_mov);
        const movimientoEliminado = await movimientosService.removeMovimiento(auxmov);
        if (!movimientoEliminado) {
            return res.status(400).json({ message: "Error al eliminar el movimiento" });
        }
        return res.status(200).json({ message: "Movimiento eliminado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};