import { CustomError } from '../error/CustomError';
import { PizzaOutputDTO } from '../model/Pizza';

import { BaseData } from "./BaseData"

const nomeTabela = "case2_pizzas"

export class PizzaData extends BaseData {


    public async createPizza(
        name: string,
        price: number,
        ingredients: string
    ): Promise<void | undefined> {
        try {
            const input = {name, price, ingredients}
            console.log(input);
            
            await PizzaData
                .connection(nomeTabela)
                .insert({ name, price, ingredients })
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    

    public async getPizzas(): Promise<void> {
        try {
            const results = await PizzaData.connection.raw("SELECT * FROM case2_pizzas;")
                
            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }


    public async getPizzaByName(name:string): Promise<any> {
        try {
            const results = await PizzaData
                .connection(nomeTabela)
                .select("*")
                .where({name})
            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

   

    public async deletePizza(id:number): Promise<void> {
        try {
            await PizzaData
                .connection(nomeTabela)
                .delete()
                .where({id})
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }
}