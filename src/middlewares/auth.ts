import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwtHandle";
import { AuthRequest } from "../interfaces/reqInter.interfaces";

const JWT_SECRET = process.env.JWT_SECRET || "secreto.01";

export const checkJWT = (req: Request, res:Response, next:NextFunction) => {
    const authHeader = req.get('authorization');

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:"Token no proporcionado o malformado"});
    }

    const token = authHeader.split(" ")[1];
    try{
        //Verificamos Token
        const decoded = verifyToken(token) as { id:number };

        if(!decoded){
            return res.status(403).send("No tienes una sesión valida");
        }
        //Enlazamos el user ID
        (req as AuthRequest).user = { id: decoded.id }
        next();
    }catch(e){
        console.log({ e });
        res.status(401);
        res.send("Sesion no valida");
    }
}