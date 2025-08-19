import { categorias } from "../models/modelCategorias.model";
import { Request, Response } from "express";
import * as categoriasService from "../services/categoriasService";

export const postCategoria = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const {categoria, presupuesto} = req.body;
        const nuevaCategoria = await categoriasService.createCategoria(categoria, presupuesto, userId);
        if (!nuevaCategoria) {
            return res.status(400).json({ message: "Error al crear la categoria" });
        }
        return res.status(201).json({ message: "Categoria creada exitosamente", nuevaCategoria });
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const putCategoria = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const {categoria, presupuesto, estatus} = req.body;
        const {id_categoria} = req.params;

        let auxcat = parseInt(id_categoria);
        
        const updCat = await categoriasService.updateCategoria(auxcat, categoria, presupuesto, estatus);
        if (!updCat) {
            return res.status(400).json({ message: "Error al actualizar la categoria" });
        }
        return res.status(200).json({ message: "Categoria actualizada exitosamente", updCat });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}