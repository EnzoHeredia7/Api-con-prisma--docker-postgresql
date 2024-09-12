import bcrypt from "bcrypt";

const SALT_ROUDS: number = 10

export const hashPassword = async (password: string): Promise <string>=>{
    return await bcrypt.hash(password,SALT_ROUDS)
}


//leer y comparar con el hash de la base de datos

