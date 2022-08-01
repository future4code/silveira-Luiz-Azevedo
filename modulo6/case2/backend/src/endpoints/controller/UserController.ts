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

                const {username, email, password} = req.body

                const user = {username, email, password}
                // console.log(user);
                
                const token = await new UserBusiness().signup(user)
                // console.log(token);
                
                res.status(201).send({message: "User created sucessifully!", token})

            } catch (error: any) {
                const { statusCode, message } = error
                if (statusCode === 200) {
                    res.status(500).send(`Unexpected error!`)
                } else {
                    res.status(statusCode || 400).send({ message });
                }
            }
    }

    login = async (
        req: Request,
        res: Response) => {
            try {

                const {email, password} = req.body
               

                const token = await new UserBusiness().login(email, password)
                if (!token) {
                    res.statusCode = 400
                    throw new Error("Password incorrect!")
                }


                res.status(200).send({message: "User logged in successfully!", token})

            } catch (error:any) {
                const { statusCode, message } = error
                if (statusCode === 200) {
                    res.status(500).send(`Unexpected error!`)
                } else {
                    res.status(statusCode || 400).send({ message });
                }
            }
        }
} 