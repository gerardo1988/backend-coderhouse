//import ProductsService from '../services/ProductsService.js';
import { productsService } from  '../services/factory.js';

//const productsService = new ProductsService();

export async function getProducts(req, res){
     
    try {
        let products= await productsService.getAll();
        res.status(200).send(products);
        
    } catch (error) {

        console.error(error);
        res.status(500).send({error:error, message:"no se pudo obtener los productos"});
        
    }
}

export async function saveProduct(req, res){
    
    try {

        let result= await productsService.save(req.body);
        res.status(201).send(result);
        
    } catch (error) {
        
        console.error(error);
        res.status(500).send({error:error, message:"no se pudo crear el producto"});
    }
}