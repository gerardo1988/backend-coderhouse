import { usersService } from "../services/factory.js";
import { createHash } from "../utils.js";

//const productsService = new ProductsService();

export async function getUsers(req, res){
     
    try {
        let users= await usersService.getAll();
        res.status(200).send(users);
        
    } catch (error) {

        console.error(error);
        res.status(500).send({error:error, message:"no se pudo obtener los los usuarios"});
        
    }
}

export async function saveUser(req, res){

    //traigo los datos del body y los guardo en un objeto
    const user={
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        age: req.body.age,
        password: createHash(req.body.password),
        loggedBy: req.body.loggedBy,
        role:req.body.role
    }
   
    try {
   
        let result= await usersService.save(user);
        res.status(201).send(result);
        
    } catch (error) {
        
        console.error(error);
        res.status(500).send({error:error, message:"no se pudo crear el usuario"});
    }
}

export async function deleteUser(req, res){

    try {
        
        let _id = req.params._id;
        let result = await usersService.delete(_id);
        res.status(200).send({message: "se elimino el usuario con id: " + _id})
    } catch (error) {
        
        console.error(error);
        res.status(500).send({error:error, message:"no se pudo eliminar el usuario"});
    }
}

export async function getOneUser(req,res){

    try {

        let _id = req.params._id;
        let result = await usersService.getOne(_id);
        res.status(200).send(result)
        
    } catch (error) {
        console.error(error);
        res.status(500).send({error:error, message:"no encontro ningun usuario con el id: " + _id});
    }
}