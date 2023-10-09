import passport from 'passport';
import { userModel } from '../services/dao/db/models/userModel.js';
import jwtStrategy from 'passport-jwt';
import { PRIVATE_KEY } from '../utils.js';

const JwtStrategy = jwtStrategy.Strategy;
const ExtractJWT = jwtStrategy.ExtractJwt;

const initializePassport = () =>{

    passport.use('jwt', new JwtStrategy(

        //extraigo la cookie
        {
            jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: PRIVATE_KEY
        },

        async(jwt_payload, done)=>{
            
            console.log("dentro de passport Strategy con JWT.");

            try {
                console.log("payload "+ jwt_payload);
                return done(null, jwt_payload.user);
            } catch (error) {
                console.error(error);
                return done(error);
            }
        }

    ));

    //serializacion y deserializacion
    passport.serializeUser((user,done)=>{
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done)=>{

        try {

            let user = await userModel.findById(id);
            done(null, user);

        } catch (error) {
            
            console.error("Error deserializando el usuario: " + error);
        }
    })
};

const cookieExtractor = req =>{
    
    let token = null;
    
    console.log("En cookie extractor: ");
    
    if(req && req.cookies){
        console.log("cookies presentes: " + req.cookies);
        token = req.cookies['jwtCookieToken'];
        console.log("Token obtenido desde Cookie: "+ token);
    }
    return token;

}

export default initializePassport;