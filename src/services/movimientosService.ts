import { movimientos } from "../models/modelMovimientos.model";

export const createMovimiento = async(id_categoria:number, id_negocio:number, monto:number, movimiento:string, ID_Usuario:number) => {
    const now = new Date();
   // const local = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
//    const localTime = fecha.toLocaleString('en-CA', { timeZone: 'America/Mexico_City' });
 //   const fechaCreacion = new Date(localTime);
    const nuevoMoviento = await movimientos.create({
        ID_Categoria: id_categoria,
        ID_Negocio: id_negocio,
        monto: monto,
        movimiento: movimiento,
        fechaCreacion: now,
        ID_Usuario: ID_Usuario
    });
    if (!nuevoMoviento) {
        return null;
    }
    return nuevoMoviento;
}

export const getMovimientosByUser = async(userId: number) => {
    const movimientosUsuario = await movimientos.findAll({
        where: { ID_Usuario: userId }
    });

    if (!movimientosUsuario || movimientosUsuario.length === 0) {
        return null;
    }
    return movimientosUsuario;
}

export const getMovimientosByCategoria = async(categoriaId: number, userId: number) => {
    const movimientosCategoria = await movimientos.findAll({
        where: { ID_Categoria: categoriaId, ID_Usuario: userId }
    });

    if (!movimientosCategoria || movimientosCategoria.length === 0) {
        return null;
    }
    return movimientosCategoria;
}

export const getMovimientosByNegocio = async(negocioId: number, userId: number) => {
    const movimientosNegocio = await movimientos.findAll({
        where: { ID_Negocio: negocioId, ID_Usuario: userId }
    });

    if (!movimientosNegocio || movimientosNegocio.length === 0) {
        return null;
    }
    return movimientosNegocio;
}

export const removeMovimiento = async(movimientoId: number) => {
    const movimientoEliminado = await movimientos.destroy({
        where: { ID_Mov: movimientoId }
    });

    if (!movimientoEliminado) {
        return null;
    }
    return movimientoEliminado;
}

export const updateMovimiento = async(movimientoId: number, id_categoria:number, id_negocio:number, monto:number, movimiento:string) => {
    const movimientoActualizado = await movimientos.update(
        { ID_Categoria: id_categoria, ID_Negocio: id_negocio, monto: monto, movimiento: movimiento },
        { where: { ID_Mov: movimientoId } }
    );

    if (!movimientoActualizado) {
        return null;
    }
    return movimientoActualizado;
}