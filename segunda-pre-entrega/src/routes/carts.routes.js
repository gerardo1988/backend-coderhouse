/*import { Router } from "express";
import fs from 'fs';

const router = Router();
const carts=[];
const products=[];
const path= "./utils/carts.js";

const readDataFromFile = async (path) => {
    try {
        const data = await fs.promises.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const generateId = async () => {
    const carts = await readDataFromFile(path);
    const counter = carts.length;
    if (counter == 0) {
        return 1;
    } else {
        return (carts[counter - 1].id) + 1;
    }
};

const generateProductId = async () => {

    const counter = products.length;
    if (counter == 0) {
        return 1;
    } else {
        return (products[counter - 1].id) + 1;
    }
}

router.get("/", async(req, res)=>{
    const cartId = parseInt(req.params.cId);

    const data = await fs.promises.readFile(path, 'utf8');
    const carts = JSON.parse(data);

    const cart = carts.find(cart => cart.id === cartId);
    if (!cart) {
        return res.status(404).send({ status: "error", msg: "Carrito no encontrado" });
    }

    res.send(cart);

});


//crea el carrito.
router.post("/", async (req, res) => {
    let cart = req.body;
    const id = await generateId();
    cart.id = id;
    cart.products = [{
        id: await generateProductId(cart.products), // Generar el ID del primer producto vacío de forma automática
    }];

    const data = await fs.promises.readFile(path, 'utf8');
    let carts = JSON.parse(data); // Asignar el valor leído a una variable local carts

    carts.push(cart);
    await fs.promises.writeFile(path, JSON.stringify(carts, null, 2));
    res.send({ status: "success", msg: 'Carrito creado!' });
});

router.post("/:cId/product/:pId", async (req, res) => {
    const cartId = parseInt(req.params.cId);
    const productId = parseInt(req.params.pId);
    const quantity = parseInt(req.body.quantity);

    console.log("Quantity recibido:", quantity);

    let data = await fs.promises.readFile(path);
    let carts = JSON.parse(data);

    const cartIndex = carts.findIndex(cart => cart.id === cartId);
    if (cartIndex === -1) {
        return res.status(404).send({ status: "error", msg: "Carrito no encontrado" });
    }

    let cart = carts[cartIndex];

    const productIndex = cart.products.findIndex(product => product.id === productId);

    if (productIndex === -1) {
        
        cart.products.push({ id: productId, quantity });
    } else {
        const existingProduct = cart.products[productIndex];
        existingProduct.quantity = existingProduct.quantity || 0;

        
        existingProduct.quantity += quantity;
    }

    await fs.promises.writeFile(path, JSON.stringify(carts, null, 2));
    res.send({ status: "success", msg: 'Producto agregado al carrito!' });
});

export default router;*/