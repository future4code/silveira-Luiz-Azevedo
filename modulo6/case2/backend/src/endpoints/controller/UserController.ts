import { Request, Response } from "express";
import { CustomError } from "../../error/CustomError";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }
    
    public signUp = async (
        req: Request, 
        res: Response) => {
            try {

                const {name, email, password} = req.body
                if (!name || !email || !password) {
                    throw new CustomError(422, "Os campos 'name', 'email' e 'password' são obrigatórios.")
                }

                const token = await new UserBusiness().signUp(name, email, password)

                res.status(201).send({message: "User created sucessifully!", token})

            } catch (error: any) {
                if (res.statusCode === 200) {
                    res.status(500).send({ message: "Internal server error" })
                } else {
                    res.send({ message: error.sqlMessage || error.message })
                }
            }
    }

    login = async (
        req: Request,
        res: Response) => {
            try {

                const {email, password} = req.body
                if (!email || !password) {
                    res.statusCode = 422
                    throw new Error("Os campos 'email' e 'password' são obrigatórios.")
                }

                const token = await new UserBusiness().login(email, password)
                if (!token) {
                    res.statusCode = 400
                    throw new Error("Entrada de password incorreta!")
                }


                res.status(200).send({message: "Usuário logado com sucesso!", token})

            } catch (error:any) {
                if (res.statusCode === 200) {
                    res.status(500).send({ message: "Internal server error" })
                } else {
                    res.send({ message: error.sqlMessage || error.message })
                }
            }
        }
} 