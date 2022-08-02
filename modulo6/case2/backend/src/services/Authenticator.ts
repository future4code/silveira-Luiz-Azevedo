import { config } from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { AuthenticationData } from "../model/User"

config()
const expiresIn = "5h"
export class Authenticator {

    generateToken = (
        payload: AuthenticationData
    ) => {
        return sign(
            payload,
            process.env.JWT_KEY!,
            {
                expiresIn
            }
        )
    }

    getTokenData = (token: string): AuthenticationData | null => {
        try {

            const tokenData = verify(
                token,
                process.env.JWT_KEY!
            ) as JwtPayload

            return {
                id: tokenData.id
            }
        } catch (error) {
            return null
        }
    }
} 