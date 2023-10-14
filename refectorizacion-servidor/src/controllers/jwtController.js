import { userModel } from '../services/dao/db/models/userModel.js';
import { isvalidPassword } from '../utils.js'
import { generateJWToken } from '../utils.js';

export async function loginUser (req, res){

    try {

        const { email, password } = req.body;
        
        const user = await userModel.findOne({email:email});
        console.log("usuario encontrado para login: " + user);

        if(!user){
            console.warn("el usuario no existe con el username: " + email);
            return res.status(204).send({error: "Not found", message: "el usuario no existe con el username: " + email});
        }

        if(!isvalidPassword(user, password)){
            console.warn("credenciales invalidas para el usuario: " + email);
            console.log(isvalidPassword(user,password));
            return res.status(401).send({status: "error", error: "El usuario y la contraseña no coinciden"});
        }

        console.log(isvalidPassword(user,password));

        //crea el token
        const tokenUser={
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            age: user.age,
            role: user.role
        }

        //llamo a la funcion que crea el token
        const access_token= generateJWToken(tokenUser);
        console.log(access_token);

        res.cookie('jwtCookieToken', access_token,{
            maxAge: 6000,
            httOnly:true
        })

        //si todo va bien me larga el siguiente mensaje
        res.status(200).send({status: "success", message: "se ha logeado correctamente"});
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: "error", error: "Error interno de la applicacion." });
    }
}
