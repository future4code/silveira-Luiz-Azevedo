import { app } from './app'
import { AddressInfo } from "net";
import { signup } from './endpoints/signup';
import { login } from './endpoints/login';
import { getAllUsers } from './endpoints/getAllUsers';
import { getProfile } from './endpoints/getProfile';
import { getUserByID } from './endpoints/getUserByID';
import { createRecipes } from './endpoints/createRecipes';
import { getRecipe } from './endpoints/getRecipe';
import { following } from './endpoints/following';
import { unfollowing } from './endpoints/unfollowing';
import { getRecipesFromFeed } from './endpoints/getRecipesFromFeed';

//User's endpoints
app.get("/user/feed", getRecipesFromFeed)
app.get("/users", getAllUsers)

app.get("/user/profile", getProfile)
app.get("/user/:id", getUserByID)

app.post("/signup", signup);
app.post("/login", login);
app.post("/user/follow", following);
app.post("/user/unfollow", unfollowing);



//Recipe's endpoints
app.post("/recipe", createRecipes);
app.get("/recipe/:id", getRecipe)













































export const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
}); 