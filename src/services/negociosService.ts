import { sequelize } from "../database/database";
import { negocios } from "../models/modelNegocios.model";

export const createNegocio = async (nombre: string, idUsuario: number) => {
  const nuevoNegocio = await negocios.create({
    Nombre: nombre,
    ID_Usuario: idUsuario,
  });
  if(!nuevoNegocio) {
    return null;
  }
  return nuevoNegocio;
};

export const updateNegocio = async (idNegocio: number, nombre: string) => {
    const negocioActualizado = await negocios.update(
        {Nombre: nombre},
        { where: { ID_Negocio: idNegocio } }
    )
    if (!negocioActualizado) {
        return null;
    }
    return negocioActualizado;
}

export const getNegociosByUser = async (userId: number) => {
    const negociosUsuario = await negocios.findAll({
        where: { ID_Usuario: userId }
    });

    if (!negociosUsuario || negociosUsuario.length === 0) {
        return null;
    }
    return negociosUsuario;
}

export const deleteNegocio = async (idNegocio: number) => {
    const negocioEliminado = await negocios.destroy({
        where: { ID_Negocio: idNegocio }
    });

    if (!negocioEliminado) {
        return null;
    }
    return negocioEliminado;
}