import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public async findUserByEmail(email:string):Promise<User>{
        try {
            const user = await BaseDatabase.connection('lbn_User').select("*").where({email: email})

            const newUser = User.toUserModel(user[0])
            return newUser
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async createUser(user:User){
        try {
    await BaseDatabase.connection('lbn_User').insert({
        id: user.getID(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
    })            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}