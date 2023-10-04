import config from "../config/config.js";
import MongoSingleton from "../config/mongodb-singleton.js"; 

let productsService;
let cartsService;

async function initializeMongoService() {
    try {
        await MongoSingleton.getIntance();

        const { default: productsServiceMongo } = await import("./dao/db/ProductsService.js");
        productsService = new productsServiceMongo();
        console.log("Servicio de productos cargado: ");
        console.log(productsService);
        
        const { default: cartsServiceMongo } = await import("./dao/db/CartsService.js");
        cartsService = new cartsServiceMongo();
        console.log("Servicio de carrito cargado: ");
        console.log(cartsService);
        
    } catch (error) {
        console.error("Error al iniciar MongoDB: ", error);
        process.exit(1);
    }
}

//solo voy a trabajar con mongodb 
switch (config.persistence) {
    case 'mongodb':

        initializeMongoService()
        break; 
    
    default:
        console.error("persistencia no válida: ", config.persistence);
        process.exit(1);
}

export { productsService, cartsService }