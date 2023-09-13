import { Router } from "express";
import productModel from '../models/products.model.js';
import userModel from '../models/user.model.js';

const router = Router();

router.get("/login", (req, res) => {
    res.render('login')
});

router.get("/register", (req, res) => {
    res.render('register')
});

// Cuando ya tenemos una session activa con los datos del user, renderizamos la vista products
router.get("/", async (req, res)=>{


    const products = await productModel.find();
    const user = await userModel.find();
    if(!products){
        res.status(400).send({ status: "error", error: "no se encontraton productos" })
    }
    //res.status(200).send(products);
    res.render('products', {products, user});
    //console.log(products);
});

//ruta para destruir la sesion
router.get("/logout", (req, res) => {
    req.session.destroy(error => {
        if (error){
            res.json({error: "error logout", mensaje: "Error al cerrar la sesion"});
        }
        res.send("Sesion cerrada correctamente.");

        //para probar si se ha cerrado la sesión.
        console.log("Sesion Destruida correctamente");
    });
})

export default router;