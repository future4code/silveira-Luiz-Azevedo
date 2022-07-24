import  {UserBusiness} from "./business/UserBusiness"
import { app } from "./controller/app"
import { UserController } from "./controller/UserController"
import { UserData } from "./data/UserData"

//User
const userBusiness = new UserBusiness(new UserData())
const userController = new UserController(userBusiness)
app.get("/user", userController.getUser)
app.get("/firstName/:id", userController.getFirstName)
app.get("/lastName/:id", userController.getLastName)
app.post("/user", userController.createUser)
app.delete("/user", userController.deleteUsers)

