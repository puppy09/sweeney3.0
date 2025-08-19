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