import { OrderData } from "../../data/OrderData";
import { PizzaData } from "../../data/PizzaData";
import { CustomError } from "../../error/CustomError";
import { OrderDatailsInputDTO, OrderInputDTO } from "../../model/Order";





export class OrderBusiness {

   
    async createOrder(order: OrderDatailsInputDTO) {
        try {
            const pizza = order.pizza
            const quantity = order.quantity

            if (!pizza  || !quantity) { throw new CustomError(422, `Please, review the parameters sent! `) }
            

            const items = pizza
            await new OrderData().createOrder(items) //dependencia

            await new OrderData().createOrderDetails(pizza, quantity)//dependência
            

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async getOrders() {
        try {
            const results = await new OrderData().getOrders()
            return results
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async getOrdersDetails(id:number) {
        try {
            const results = await new OrderData().getOrdersDatails(id)
            return results
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async deletePizza(id:number){
        try {
            new PizzaData().deletePizza(id)
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

}
