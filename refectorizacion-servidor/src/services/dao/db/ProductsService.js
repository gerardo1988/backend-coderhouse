import { ProductsModel } from '../db/models/productsModel.js';

export default class ProductsService {
    
    getAll = async() => {
        try {

            let products = await ProductsModel.find();
            return products.map(product=> product.toObject());

        } catch (error) {
            
            throw new Error(error);
        }
    }

    save= async(product)=> { 
        
        try {
            
            let result = await ProductsModel.create(product);
            return result;
        
        } catch (error) {
            
            throw new Error(error);
        }
    }
}


