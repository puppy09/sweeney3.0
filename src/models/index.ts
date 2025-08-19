import { usuarios } from "./modelUsuarios.model";
import { categorias } from "./modelCategorias.model";
import { movimientos } from "./modelMovimientos.model";
import { negocios } from "./modelNegocios.model";
import { asociaciones } from "./modelAsociaciones.model";
export const registerModels = () => {
    usuarios.sync({alter:true});
    categorias.sync({alter:true});
    negocios.sync({alter: true});
    movimientos.sync({alter: true});
    asociaciones.sync({alter: true});
}