import { PizzaData } from "../../data/PizzaData";
import { CustomError } from "../../error/CustomError";
import { PizzaInputDTO } from "../../model/Pizza";




export class PizzaBusiness {

    
    async createPizza(pizza: PizzaInputDTO) {
        try {
            const name = pizza.name
            const price = pizza.price
            const ingredients = pizza.ingredients
// console.log(pizza);

            if (!name || !price || !ingredients) { throw new CustomError(422, `Please, review the parameters sent! `) }
            


            const consultPizzas = await new PizzaData().getPizzaByName(name)
            // console.log(consultPizzas.name);
            
            if ( consultPizzas && consultPizzas.name === name) {
                throw new CustomError(422, "There is already a pizza with that name, choose an other one.")
            }
            
              
                
               const pizzaData =   new PizzaData()
               await pizzaData.createPizza(name, price, ingredients) //dependencia
        
           
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async getPizzas() {
        try {
            const results = await new PizzaData().getPizzas()
            // console.log(results);
            
            return results
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    // async deletePizza(id:number){
    //     try {
    //         new PizzaData().deletePizza(id)
    //     } catch (error:any) {
    //         throw new CustomError(error.statusCode, error.message);
    //     }
    // }

}
