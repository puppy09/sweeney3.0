import { DataType, Optional, Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database";

interface movimientosAttributes{
    ID_Mov: number,
    movimiento: string,
    ID_Categoria: number,
    ID_Negocio: number,
    ID_Usuario: number,
    monto: number,
    fechaCreacion: Date
}

interface movimientosCreacionAttributes extends Optional<movimientosAttributes, 'ID_Mov'>{}

class movimientos extends Model<movimientosAttributes, movimientosCreacionAttributes> implements movimientosAttributes{
    public ID_Mov!: number;
    public movimiento!: string;
    public ID_Categoria!: number;
    public ID_Negocio!: number;
    public ID_Usuario!: number;
    public monto!: number;
    public fechaCreacion!: Date;
}

movimientos.init({
    ID_Mov:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    movimiento:{
        type:DataTypes.STRING(200),
        allowNull: false
    },
    ID_Categoria:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    ID_Negocio:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false
    },
    ID_Usuario:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false 
    },
    monto:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    fechaCreacion:{
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'TB_MOVIMIENTOS',
    timestamps: false
});

export {movimientos};