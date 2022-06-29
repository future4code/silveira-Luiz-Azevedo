import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";
import dotenv from 'dotenv'

dotenv.config()
export class authenticator {

   public generateToken(info:authenticationData): string{

        const token = jwt.sign(
            {id: info.id,
            role: info.role},
            "senhaSuperSegura",
            {expiresIn: "1h"}
        )
        return token;
    }
}