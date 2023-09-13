import passport from 'passport';
import passportLocal from 'passport-local';
import GitHubStrategy from 'passport-github2';
import userModel from '../models/user.model.js';
import { createHash, isValidPassword } from '../utils.js';

const localStrategy = passportLocal.Strategy;

const initalizePassport = () =>{

    //aca aplico la estrategia de github para el login
    passport.use('github', new GitHubStrategy(
        {
            clientID:'Iv1.9e8cd6f0fb8a5c56',
            clientSecret: '9a870e8cd11a04085d05f41abbc2539f60ee713d',
            callbackUrl:'http://localhost:9090/api/sessions/githubcallback'
        },
         async(accessToken, refreshToken, profile, done) =>{
            
            console.log("perfil: ");
            console.log(profile);

            try {
                const user= await userModel.findOne({email: profile._json.email});
                console.log("usuario encontrado: ");
                console.log(user);

                if (!user) {
                    console.warn("usuario no existe con el username: " + profile._json.email);
                    let newUser = {
                        first_name: profile._json.name,
                        last_name: '',
                        age: 25,
                        email: profile._json.email,
                        password: '',
                        loggedBy: "GitHub"
                        
                    }
                    const result = await userModel.create(newUser);
                    done(null, result);  
                
                }else{

                    return done(null, user);

                }
                               
            } catch (error) {
                
                return done(error);
            }

         }
    ))
    
    passport.use('register', new localStrategy(
        {passReqToCallback: true, usernameField: 'email'},
        
        async(req, username, password, done)=>{
            const {first_name,last_name, email, age}= req.body;
            try {

                const exists = await userModel.findOne({ email })
                if (exists) {
                    return res.status(400).send({ status: 'error', message: 'usuario ya existe' })
                }
                const user = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: createHash(password)
                    
                }
                const result = await userModel.create(user);
                
                return done(null, result)
            } catch (error) {
                return done('Error register user: ' + error)
            }
        }
    ));

    passport.use('login', new localStrategy(
        
        {passReqToCallback: true, usernameField: 'email'},
        async(req, username, password, done) =>{
            try{
                const user = await userModel.findOne({email: username})
                console.log(user);
                if(!user){
                    console.warn("user doesnt exists with username " + username);
                    return done(null, false);
                }

                if(!isValidPassword(user, password)){
                    return res.status(401).send({status: "error", error: "incorrect credentials"});
                }
            }catch(error){

                return done(error);
            }
        }
    ))

    //serializacion y deserializacion
    passport.serializeUser((user, done)=>{
        done(null, user._id)
    });

    passport.deserializeUser(async(id, done)=>{
        try {
            let user = await userModel.findOne(id);
            done(null,user);
            
        } catch (error) {
            console.error("Error deserialize user: " + error)
        }
    })
}

export default initalizePassport;