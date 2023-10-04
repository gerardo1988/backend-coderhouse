//import CartsService from '../services/CartsService.js';
import { cartsService } from  '../services/factory.js';

//const cartsService = new CartsService();

export async function getCarts(req, res){
    
    try {
        let carts= await cartsService.getAll();
        res.status(200).send(carts);
        
    } catch (error) {

        console.error(error);
        res.status(500).send({error:error, message:"no se pudo obtener los carritos"});
        
    }
}

export async function saveCart(req, res){
    
    try {

        let result= await cartsService.save(req.body);
        res.status(201).send(result);
        
    } catch (error) {
        
        console.error(error);
        res.status(500).send({error:error, message:"no se pudo guardar el carrito"});
    }
}

