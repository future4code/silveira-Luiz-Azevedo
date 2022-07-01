import { Recipes } from "../entities/Recipes";
import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase{

    public async createRecipe(recipe:Recipes){
        try {
            
            await BaseDatabase.connection('lbn_Recipes').insert({
                id: recipe.getID(),
                date: recipe.getDate(),
                tittle: recipe.getTittle(),
                description: recipe.getDescription(),
                id_user: recipe.getUserID()
            })            
                } catch (error:any) {
                    throw new Error(error.sqlMessage || error.message);
                }
            }

    public async getRecipeByID(id:string):Promise<Recipes>{
        try {
           const recipe =  await BaseDatabase.connection('lbn_Recipes').select("*").where({id})
           return recipe[0] && Recipes.toUserModel(recipe[0])
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async deleteRecipe(id:string):Promise<void>{
        await BaseDatabase.connection()
            .delete()
            .from('lbn_Recipes')
            .where('creator_user_id', id)
    }
    }
