import { UserData } from "../../data/UserData";
import { CustomError } from "../../error/CustomError";
import { UserInputDTO } from "../../model/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { generateId } from "../../services/IDGenerator";




export class UserBusiness {


    async signup(user: UserInputDTO) {
        try {
            const { username, email, password } = user
            // console.log(username);
            


            if (!username || !email || !password) { throw new CustomError(422, `Please, review the parameters sent! `) }

            if (email.indexOf("@") === -1) {
                throw new Error("Invalid Email!")
            }
            // verificando se o email possui o formato correto contendo um @.
            if (password.length < 6) {
                throw new Error("Password must have at least 6 characters!")
            }

            const consultUsers = await new UserData().getUserByEmail(email)
            // console.log(consultUsers);
            

            if (consultUsers && consultUsers.email === email) {
                throw new CustomError(422, "There is already a User with that email, choose an other one.")
            }
            const id = generateId()
            // console.log("id", id);
            
            const cypherPassword: string = new HashManager().createHash(password)
            const newUser = {
                id: id,
                username: username,
                email: email,
                password: cypherPassword
            }
            
            const userData = new UserData()
            await userData.createUser(newUser) //dependencia
            const token: string = new Authenticator().generateToken({ id })

            return token



        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async login(email: string, password: string) {
        try {
            const getUserByEmail = await new UserData().getUserByEmail(email)
            const userPassword = getUserByEmail.password
            const userId = getUserByEmail.id

            const passwordIsCorrect: boolean = new HashManager().compareHash(password, userPassword)

            if (passwordIsCorrect) {
                const token: string = new Authenticator().generateToken({ id: userId })
                return token
            }
        }
        catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async getUsers() {
        try {
            const results = await new UserData().getUsers()
            // console.log(results);

            return results
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async deleteUser(id: string) {
        try {
            if (!id) { throw new CustomError(422, "Please, review the ID sent!") }
            new UserData().deleteUser(id)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

}
