import { Router } from 'express';
import userModel from '../models/user.model.js';
//import productModel from '../models/products.model.js';

const router = Router();

router.post("/register", async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;
    console.log("Registrando user");
    console.log(req.body);

    const exists = await userModel.findOne({ email })
    if (exists) {
        return res.status(400).send({ status: 'error', message: 'usuario ya existe' })
    }
    const user = {
        first_name,
        last_name,
        email,
        age,
        password
    }
    const result = await userModel.create(user);
    res.send({ status: "success", message: "Usuario creado con exito con ID: " + result.id })
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password })

    if (!user) return res.status(401).send({ status: "error", error: "Incorrect credentials" })

    if(user.email==='adminCoder@coder.com' && user.password=== 'adminCod3r123'){
        req.session.user = username;
        req.session.admin = true;
    }else{
        req.session.user = username;
        req.session.admin =false;
    }

    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age
    }
    res.send({ status: "success", payload: req.session.user, message: "¡Primer logueo realizado! :)" });
});

//ruta para traer los productos
/*router.get("/", async (req, res)=>{

    const products = await productModel.find();

    if(!products){
        res.status(400).send({ status: "error", error: "no se encontraton productos" })
    }
    res.status(200).send(products);
    //res.render('products');
});*/


export default router;