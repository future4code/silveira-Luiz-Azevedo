import { OrderBusiness } from "./endpoints/business/OrderBusiness";
import { PizzaBusiness } from "./endpoints/business/PizzaBusiness";
import { app } from "./endpoints/controller/app";
import { OrderController } from "./endpoints/controller/OrderController";
import { PizzaController } from "./endpoints/controller/PizzaController";

// PIZZA
const pizzaBusiness = new PizzaBusiness()
const pizzaController = new PizzaController(pizzaBusiness)
app.get("/api/pizzas", pizzaController.getPizzas)
app.post("/api/pizzas", pizzaController.createPizza)
app.delete("/api/pizzas/:id", pizzaController.deletePizza)


//ORDERS
const orderBusiness = new OrderBusiness()
const orderController = new OrderController(orderBusiness)
app.get("/api/orders", orderController.getOrders)
app.get("/api/orders/:id", orderController.getOrdersDetails)
app.post("/api/orders",orderController.createOrder)