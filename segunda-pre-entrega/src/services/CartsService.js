import { CartsModel } from "../models/cartsModel.js";

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

            let saveCart = await CartsModel.find(cart);
            return saveCart;
        
        } catch (error) {

            throw new Error(error);
            
        }       
    }


}