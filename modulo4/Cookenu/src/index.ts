import { app } from './app'
import { AddressInfo } from "net";
import { signup } from './endpoints/signup';


app.post("/signup", signup)














































export const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
}); 