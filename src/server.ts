import app from './app';
import { checkConnection } from './database/database';
import { usuarios } from './models/modelUsuarios.model';
import { sequelize } from './database/database';
import { registerModels } from './models';


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    checkConnection();
    //registerModels();
});
