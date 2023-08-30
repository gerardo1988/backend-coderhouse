import CartsService from '../services/CartsService.js';

const cartsService = new CartsService();

export async function getCart(req, res){
    
    try {
        const result= await cartsService.getAll();
        res.status(200).json(result);
        
    } catch (error) {

        res.status(400).json(error.message);
        
    }
}

export async function saveCart(req, res){
    
    try {

        const { body } = req;
        const result= await cartsService.save(body);
        res.status(200).json(result);
        
    } catch (error) {
        
        res.status(400).json(error.message);
    }
}

export async function getCartById(req, res) {
    const cartId = req.params.cid;

    try {
        const cart = await CartsModel.findById(cartId).populate("products.product", "title price");

        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export async function removeProductFromCart(req, res) {
    const cartId = req.params.cid;
    const productId = req.params.pid;

    try {
        const cart = await CartsModel.findById(cartId);

        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        
        cart.products = cart.products.filter(item => item.product.toString() !== productId);

        await cart.save();

        res.status(200).json({ message: "Producto eliminado del carrito" });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export async function updateCart(req, res) {
    const cartId = req.params.cid;
    const newProducts = req.body.products;

    try {
        const cart = await CartsModel.findById(cartId);

        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        
        cart.products = newProducts.map(productId => ({ product: productId }));

        await cart.save();

        res.status(200).json({ message: "Carrito actualizado con nuevos productos" });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export async function updateProductQuantity(req, res) {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const newQuantity = req.body.quantity;

    try {
        const cart = await CartsModel.findById(cartId);

        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        const productIndex = cart.products.findIndex(item => item.product.toString() === productId);

        if (productIndex === -1) {
            return res.status(404).json({ message: "Producto no encontrado en el carrito" });
        }

        cart.products[productIndex].quantity = newQuantity;
        
        await cart.save();

        res.status(200).json({ message: "Cantidad de ejemplares del producto actualizada" });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export async function removeAllProductsFromCart(req, res) {
    const cartId = req.params.cid;

    try {
        const cart = await CartsModel.findById(cartId);

        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        // Eliminar todos los productos del array de productos en el carrito
        cart.products = [];

        await cart.save();

        res.status(200).json({ message: "Todos los productos del carrito eliminados" });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
}