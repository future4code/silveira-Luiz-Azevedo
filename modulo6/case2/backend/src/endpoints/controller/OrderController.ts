import { Request, Response } from "express";
import { OrderDatailsInputDTO } from "../../model/Order";
import { OrderBusiness } from "../business/OrderBusiness";



export class OrderController {
    constructor(
        private orderBusiness: OrderBusiness
    ) { }
    

    async createOrder(req: Request, res: Response) {
        try {
            const input: OrderDatailsInputDTO = {
                pizza: req.body.pizza,
                quantity: Number(req.body.quantity)
            }
            const id = await new OrderBusiness().createOrder(input)



            res.status(200).send({ message: `Order placed successfully. This is the order's ID: ${id}` })
        } catch (error: any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }
        async getOrders(req: Request, res: Response) {
            try {
                
                    const results = await new OrderBusiness().getOrders();
    
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

        async getOrdersDetails(req: Request, res: Response) {
            const id = Number(req.params.id)
            try {
                
                    const results = await new OrderBusiness().getOrdersDetails(id);
    
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

    
} 