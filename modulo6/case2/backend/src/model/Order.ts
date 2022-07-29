export class Pizza {
    constructor(
        private id: number,
        private pizza: string,
        private quantity: number,

    ) { }

    getId = (): number => {
        return this.id
    }
    getPizza = (): string => {
        return this.pizza
    }
    getquantity = (): number => {
        return this.quantity
    }
    setId(id: number){
        this.id = id;
    }
    setpizza(pizza: string){
        this.pizza = pizza;
    }

    setQuantity(quantity: number){
        this.quantity = quantity;
    }  
}

export interface OrderInputDTO {
    
}
export interface OrderOutputDTO {
    id:number
}

export interface OrderDatailsInputDTO {
    pizza:string,
    quantity:number
}
// export interface OrderDatailsOutputDTO {
     // id:number
// }
