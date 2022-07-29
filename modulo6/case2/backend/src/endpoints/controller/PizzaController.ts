import { Request, Response } from "express";
import { PizzaInputDTO } from "../../model/Pizza";
import { PizzaBusiness } from "../business/PizzaBusiness";


export class PizzaController {
    constructor(
        private pizzaBusiness: PizzaBusiness
    ) { }
    

    async createPizza(req: Request, res: Response) {
        try {
            const input: PizzaInputDTO = {
                name: req.body.name,
                price: Number(req.body.price),
                ingredients: req.body.ingredients
            }
            // console.log(input);
            await new PizzaBusiness().createPizza(input)
            // await this.PizzaBusiness.createPizza(input)



            res.status(200).send({ message: `Pizza inserted successfully` })
        } catch (error: any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }
        async getPizzas(req: Request, res: Response) {
            try {
                
                    const results = await new PizzaBusiness().getPizzas();
                    // console.log(results);
    
                    res.status(200).send(results);
    
            } catch (error: any) {
                const { statusCode, message } = error
                if (statusCode === 200) {
                    res.status(500).send(`Unexpected error!`)
                } else {
                    res.status(statusCode || 400).send({ message });
                }
            }
        }

    

    // async deletePizza(req: Request, res: Response){
    //     const id = Number(req.params.id)
        
    //     try {
    //        await new PizzaBusiness().deletePizza(id)
    //     //    await this.userBusiness.deleteUsers()
    //         res.status(200).send("Successfully deleted pizza!")
    //     } catch (error:any) {
    //         const { statusCode, message } = error
    //         if (statusCode === 200) {
    //             res.status(500).send(`Unexpected error!`)
    //         } else {
    //             res.status(statusCode || 400).send({ message });
    //         }
    //     }
    //     }
    

  
} 