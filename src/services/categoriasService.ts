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

export const updateCategoria = async(id_categoria: number, categoria: string, presupuesto: number, estatus: number) => {
    const categoriaActualizada = await categorias.update(
        { categoria, presupuesto, estatus },
        { where: { ID_Categoria: id_categoria } }
    );

    if (!categoriaActualizada) {
        return null;
    }
    return categoriaActualizada;
}

export const removeCategoria = async(id_categoria: number) => {
    const categoriaEliminada = await categorias.destroy({
        where: { ID_Categoria: id_categoria }
    });

    if (!categoriaEliminada) {
        return null;
    }
    return categoriaEliminada;
}

export const getCategoriasByUser = async(userId: number) => {
    const categoriasUsuario = await categorias.findAll({
        where: { ID_Usuario: userId }
    });

    if (!categoriasUsuario || categoriasUsuario.length === 0) {
        return null;
    }
    return categoriasUsuario;
}