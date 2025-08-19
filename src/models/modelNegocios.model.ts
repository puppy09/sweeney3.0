import { DataType, Optional, Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database";

interface negocioAttributes{
    ID_Negocio: number,
    Nombre: string,
    ID_Usuario: number
}

interface negocioCreacionAttributes extends Optional<negocioAttributes,'ID_Negocio'>{}

class negocios extends Model<negocioAttributes, negocioCreacionAttributes> implements negocioAttributes{
    public ID_Negocio!: number;
    public Nombre!: string;
    public ID_Usuario!: number;
}
negocios.init({
    ID_Negocio:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ID_Usuario:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false
    }
}, {
    sequelize,
    tableName: 'TB_NEGOCIOS',
    timestamps: false
});

export {negocios}