export class Pizza {
    constructor(
        private id: number,
        private name: string,
        private price: number,

    ) { }

    getId = (): number => {
        return this.id
    }
    
    getprice = (): number => {
        return this.price
    }
    setId(id: number){
        this.id = id;
    }
    setName(name: string){
        this.name = name;
    }

    setprice(price: number){
        this.price = price;
    }  
}

export interface PizzaInputDTO {
    name: string,
    price: number,
    ingredients: string
}
export interface PizzaOutputDTO {
    id:number,
    name: string,
    price: number
}

