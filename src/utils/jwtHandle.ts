//Handle para JWT para generar Tokens y Verificarlos
import { sign, verify } from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const secretoJWT = process.env.JWT_SECRET || "secreto001";

const generateToken = (id: number)=>{
    return sign({ id }, secretoJWT, {expiresIn:"4h"})
}

const verifyToken = (token: string)=>{
    try{
        return verify(token, secretoJWT);
    }catch(error){
        return null;
    }
}

export {generateToken, verifyToken};