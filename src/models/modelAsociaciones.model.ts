import { sequelize } from "../database/database";
import { DataTypes, Model, Optional } from "sequelize";

interface asociacionesAttributes{
    ID_Asociacion: number;
    ID_Categoria: number;
    ID_Negocio: number;
    ID_Usuario: number;
}

interface asociacionesCreacionAttributes extends Optional<asociacionesAttributes, 'ID_Asociacion'>{}
class asociaciones extends Model<asociacionesAttributes, asociacionesCreacionAttributes> implements asociacionesAttributes{
    public ID_Asociacion!: number;
    public ID_Categoria!: number;
    public ID_Negocio!: number;
    public ID_Usuario!: number;
}
asociaciones.init({
    ID_Asociacion:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    ID_Categoria:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    ID_Negocio:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    ID_Usuario:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'TB_ASOCIACIONES',
    timestamps: false
})

export { asociaciones };