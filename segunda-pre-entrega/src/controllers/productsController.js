import ProductsService from '../services/ProductsService.js';

const productsService = new ProductsService();

export async function getProduct(req, res){
     let limit= req.query.limit;
     let page= req.query.page;
     let sort = req.query.sort
     let query = req.query.sort;
    try {
        const result= await productsService.getAll(limit, sort, query,page);
        res.status(200).json(result);
        
    } catch (error) {

        res.status(400).json(error.message);
        
    }
}

export async function saveProduct(req, res){
    
    try {

        const { body } = req;
        const result= await productsService.save(body);
        res.status(200).json(result);
        
    } catch (error) {
        
        res.status(400).json(error.message);
    }
}