import { CustomError } from '../error/CustomError';
import { OrderOutputDTO } from '../model/Order';
import { BaseData } from "./BaseData"

const ordersList = "orders_list_case2";
const ordersDetails = "orders_details_case2"

export class OrderData extends BaseData {


    public async createOrder(items:string): Promise<void | undefined> {
        try {
            await OrderData
                .connection(ordersList)
                .insert({items})
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    public async createOrderDetails(
        pizza: string,
        quantity: number
    ): Promise<void | undefined> {
        try {
            await OrderData
                .connection(ordersDetails)
                .insert({ pizza, quantity })
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }


    public async getOrders(): Promise<OrderOutputDTO[]> {
        try {
            const results = await OrderData
                .connection(ordersList)
                .select("*")
            return results;
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    public async getOrdersDatails(id: number): Promise<OrderOutputDTO[]> {
        try {
            const results = await OrderData
                .connection(ordersDetails)
                .select("*")
                .where({id})
            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }



}