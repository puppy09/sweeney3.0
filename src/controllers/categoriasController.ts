import { categorias } from "../models/modelCategorias.model";
import { Request, Response } from "express";
import * as categoriasService from "../services/categoriasService";

export const postCategoria = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        console.log(userId);
        const {categoria, presupuesto} = req.body;
        const nuevaCategoria = await categoriasService.createCategoria(categoria, presupuesto, userId);
        console.log(nuevaCategoria);
        if (!nuevaCategoria) {
            return res.status(400).json({ message: "Error al crear la categoria" });
        }
        return res.status(201).json({ message: "Categoria creada exitosamente", nuevaCategoria });
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};