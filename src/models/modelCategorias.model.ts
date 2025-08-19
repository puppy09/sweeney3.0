import { DataType, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";


interface categoriasAttributes{
    ID_Categoria: number,
    categoria:string,
    presupuesto: number,
    estatus: string,
    ID_Usuario: number,
    FechaCreacion: Date
}


interface categoriasCreacionAttributes extends Optional<categoriasAttributes, 'ID_Categoria'>{}

class categorias extends Model<categoriasAttributes, categoriasCreacionAttributes> implements categoriasAttributes{

    public ID_Categoria!: number;
    public categoria!:string;
    public presupuesto!: number;
    public estatus!: string;
    public ID_Usuario!: number;
    public FechaCreacion!: Date;
}

categorias.init({
    ID_Categoria:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey: true
    },
    categoria:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    presupuesto:{
        type:DataTypes.DECIMAL,
        allowNull: false
    },
    estatus:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    ID_Usuario:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false
    },
    FechaCreacion:{
        type:DataTypes.DATE,
        allowNull:false
    }

}, {
    sequelize,
    tableName: 'TB_CATEGORIAS',
    timestamps:false
});

export { categorias };

