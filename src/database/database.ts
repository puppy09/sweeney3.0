import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
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
        await sequelize.sync({ alter: false }); // Crea o actualiza tablas
        console.log("✅ Modelos sincronizados");
    } catch(error){
        console.log('Error al conectar o sincronizar', error);
    }
}

export{sequelize, checkConnection};