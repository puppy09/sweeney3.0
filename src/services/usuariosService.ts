import { usuarios } from "../models/modelUsuarios.model";
import { sequelize } from "../database/database";
import { encrypt, verify } from "../utils/bcryptHandle";

export async function findUser(email: string, contra:string){

    const usuario = await usuarios.findOne({
        where:{
            correo: email
        }
    });
    if (!usuario) return null;

    const isValid = await verify(contra, usuario.contra);
    if(!isValid) return null;

    return usuario;
}

export async function registrarUser(nombre:string, apellido_pat: string, apellido_mat:string, correo: string, contra:string) {
    console.log(correo, nombre, apellido_mat, apellido_pat, contra);
    const contraHasshed = await encrypt(contra);
    const usuario = await usuarios.create({ nombre, apellido_pat, apellido_mat, correo, contra:contraHasshed });
    if(!usuario){
        return null;
    }

    return usuario;

}
