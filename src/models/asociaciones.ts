import { usuarios } from "./modelUsuarios.model";
import { categorias } from "./modelCategorias.model";
import { movimientos } from "./modelMovimientos.model";
import { negocios } from "./modelNegocios.model";


//Relaciones Categorias
usuarios.hasMany(categorias, {
    foreignKey: 'ID_Usuario'
});

categorias.belongsTo(usuarios, {
    foreignKey:'ID_Usuario'
});

//Relaciones Movimientos - Usuario
movimientos.belongsTo(usuarios,{
    foreignKey: 'ID_Usuario'
});

usuarios.hasMany(movimientos,{
    foreignKey: 'ID_Usuario'
});

//Relaciones Movimientos - Categorias

movimientos.belongsTo(categorias,{
    foreignKey: 'ID_Categoria'
});

categorias.hasMany(movimientos,{
    foreignKey: 'ID_Categoria'
});

//Relaciones Movimientos - Negocio

movimientos.belongsTo(negocios,{
    foreignKey: 'ID_Negocio'
});

negocios.hasMany(movimientos,{
    foreignKey: 'ID_Negocio'
});

//Relaciones Negocios - Usuario
negocios.belongsTo(usuarios,{
    foreignKey:'ID_Usuario'
});

usuarios.hasMany(negocios,{
    foreignKey: 'ID_Usuario'
});