//Handle para encriptar y verificar contraseñas
import {hash, compare} from "bcrypt";
const encrypt = async(contra: string) =>{
    const passHashed = await hash(contra,10);
    return passHashed;
}

const verify = async(contra:string, passHashed:string)=>{
    const isCorrect = await compare(contra, passHashed);
    return isCorrect;
}
export {encrypt, verify};