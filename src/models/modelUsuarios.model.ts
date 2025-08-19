import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";


interface usuariosAttributes{
    ID_Usuario: number,
    nombre:string,
    apellido_pat: string,
    apellido_mat: string,
    correo: string,
    contra: string
}


interface usuariosCreacionAttributes extends Optional<usuariosAttributes, 'ID_Usuario'>{}

class usuarios extends Model<usuariosAttributes, usuariosCreacionAttributes> implements usuariosAttributes{

    public ID_Usuario!: number;
    public nombre!: string;
    public apellido_pat!: string;
    public apellido_mat!: string;
    public correo !: string;
    public contra!: string;
}

usuarios.init({
    ID_Usuario:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    apellido_pat:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    apellido_mat:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    correo:{
        type:DataTypes.STRING(20),
        allowNull:false,
        unique:true
    },
    contra:{
        type:DataTypes.STRING(200),
        allowNull:false
    }

}, {
    sequelize,
    tableName: 'TB_USUARIOS',
    timestamps:false
});

export { usuarios };

