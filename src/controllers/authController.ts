import { Request, Response } from "express";
import { generateToken } from "../utils/jwtHandle";
import * as userService from "../services/usuariosService";
import dotenv from 'dotenv';

dotenv.config

export const login = async(req:Request, res:Response)=>{
    try{
        const {correo, contra} = req.body;

   const usuario = await userService.findUser(correo, contra);
    if(!usuario){
        return res.status(401).json({message: 'Usuario o contraseña invalidos'});
    }

    const token = generateToken(usuario.ID_Usuario);
    return res.status(200).json({message: 'Login Exitoso',token});    
} catch(error){
    console.error(error);
    return res.status(500).json({message: "Error interno del servidor"});
}

}

export const registro = async(req: Request, res:Response)=>{
    try{
        const {nombre, apellido_pat, apellido_mat, correo, contra} = req.body;
        console.log(req.body);
        const usuario = await userService.registrarUser(nombre, apellido_pat, apellido_mat, correo, contra);
        if(!usuario){
            return res.status(400).json({message: 'Error al ingresar datos o correo ya utilizado'});
        }

        return res.status(200).json({message:'Registro exitoso', usuario});

    }catch(error){
        console.error(error);
        return res.status(500).json({message: 'Error interno del servidor'});
    }
}