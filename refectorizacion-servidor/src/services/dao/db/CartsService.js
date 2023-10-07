import { CartsModel } from "../db/models/cartsModel.js";

export default class CartsService{
   
    getAll = async () =>{
        try {

            let carts = await CartsModel.find();
            return carts.map(cart=> cart.toObject());
        
        } catch (error) {

            throw new Error(error);
            
        }       
    }

    save = async (cart) =>{
        try {

            let result = await CartsModel.create(cart);
            return result;
        
        } catch (error) {

            throw new Error(error);
            
        }       
    }


}