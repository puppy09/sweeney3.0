import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
import { usuarios } from '../models/modelUsuarios.model';
import { categorias } from '../models/modelCategorias.model';
import { movimientos } from '../models/modelMovimientos.model';
import { negocios } from '../models/modelNegocios.model';
import { asociaciones } from '../models/modelAsociaciones.model';
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASS as string,{
        host: 'localhost',
        dialect: 'mysql',
        logging: console.log
    }
)

const checkConnection = async() => {
    try{
        console.log('Conectando con la base de datos');
        await sequelize.authenticate();
        console.log('COnecto');

         console.log("🔄 Sincronizando modelos...");
        await sequelize.sync({ alter: true }); // Crea o actualiza tablas
        console.log("✅ Modelos sincronizados");
    } catch(error){
        console.log('Error al conectar o sincronizar', error);
    }
}

export{sequelize, checkConnection};