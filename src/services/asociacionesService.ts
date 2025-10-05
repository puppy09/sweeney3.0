import { asociaciones } from '../models/modelAsociaciones.model';

export const createAsociacion = async(id_categoria: number, id_negocio: number, ID_Usuario: number) => {

    const nuevaAsociacion = await asociaciones.create({
        ID_Categoria: id_categoria,
        ID_Negocio: id_negocio,
        ID_Usuario: ID_Usuario
    });
    
    if(!nuevaAsociacion) {
        return null;
    }
    return nuevaAsociacion;
}

export const updAsociacion = async(id_categoria: number, id_negocio: number, id_asociacion: number) => {
    const asociacion = await asociaciones.update(
        { ID_Categoria: id_categoria, ID_Negocio: id_negocio },
        { where: { ID_Asociacion: id_asociacion } }
    );
    
    if(!asociacion) {
        return null;
    }
    return asociacion;
}

export const delAsociacion = async(id_asociacion: number) => {
    const asociacionEliminada = await asociaciones.destroy({
        where: { ID_Asociacion: id_asociacion }
    });

    if(!asociacionEliminada) {
        return null;
    }
    return asociacionEliminada;
}

export const getAsociacionesByUser = async(userId: number) => {
    const asociacionesUsuario = await asociaciones.findAll({
        where: { ID_Usuario: userId }
    });

    if(!asociacionesUsuario || asociacionesUsuario.length === 0) {
        return null;
    }
    return asociacionesUsuario;
}