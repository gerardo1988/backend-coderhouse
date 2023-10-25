import { generateProduct } from "../utils";

export const getUser = async(req, res) =>{
    try {

        let products = [];

        for (let i =0; i < 100; i++) {
            products.push(generateProduct());
            
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send({error: error, meessage: "No se pudo obtener los productos"});
    }
}