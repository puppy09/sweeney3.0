import { sequelize } from "../database/database";
import { categorias } from "../models/modelCategorias.model";

export const createCategoria = async(nombre: string, presupuesto: number, ID_Usuario:number) => {
    const nuevaCategoria = await categorias.create({
        categoria: nombre,
        presupuesto: presupuesto,
        estatus: 1,
        ID_Usuario: ID_Usuario
    });

    if (!nuevaCategoria) {
        return null;
    }
    return nuevaCategoria;
}