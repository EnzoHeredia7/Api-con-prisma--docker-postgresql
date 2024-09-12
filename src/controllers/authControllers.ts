import { Request, Response } from "express"
import { hashPassword } from "../services/password.service"
import prisma from '../models/user'
import { generateToken } from "../services/auth.service"

export const register = async(req: Request, res:Response) : Promise<void> =>{

    const {email, password} = req.body

    try {
        const hashedPssword = await hashPassword(password)
        const user = await prisma.create(

            {
                data: {
                    email,
                    password: hashedPssword
                }
            }
        )
        const token = generateToken(user)
        res.status(201).json({token})
    } catch (error) {

        console.log(error)
        res.status(500).json({error: 'hubo un error en el registro'})


    }


}