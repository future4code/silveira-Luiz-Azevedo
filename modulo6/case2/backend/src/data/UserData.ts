import { CustomError } from '../error/CustomError';
import { UserInputDTO, UserOutputDTO } from '../model/User';

import { BaseData } from "./BaseData"

const nomeTabela = "case2_Users"

export class UserData extends BaseData {


    public async createUser(user: {}
    ): Promise<void | undefined> {
        try {
                        
            await UserData
                .connection(nomeTabela)
                .insert(user)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    

    public async getUsers(): Promise<void> {
        try {
            const results = await UserData.connection.raw("SELECT * FROM case2_Users;")
                
            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }


    public async getUserByEmail(email:string): Promise<any> {
        try {
            const results = await UserData
                .connection(nomeTabela)
                .select("*")
                .where({email})
            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

   

    public async deleteUser(id:string): Promise<void> {
        try {
            await UserData
                .connection(nomeTabela)
                .delete("*")
                .where({id})
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }
}