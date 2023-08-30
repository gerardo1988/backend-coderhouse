import { ProductsModel } from '../models/productsModel.js';

export default class ProductsService {
    async getAll(limit = 10, sort, stockQuery = null, page = 1) {
        try {
            const query = stockQuery !== null ? { stock: stockQuery } : {};

            const options = {
                page: page,
                limit: limit,
                sort: { price: sort === 'asc' ? 1 : -1 }
            };

            const products = await ProductsModel.paginate(query, options);

            return products;
        } catch (error) {
            throw new Error(error);
        }
    }

    async save(product) { 
        try {
            let saveProduct = await ProductsModel.create(product);
            return saveProduct;
        } catch (error) {
            throw new Error(error);
        }
    }
}


