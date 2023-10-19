import express from 'express';
import __dirname from './utils.js';
import config from './config/config.js';
import cookieParser from 'cookie-parser';
import passport from 'passport';
//import initializePassport from './config/passport.config.js';

//rutas
import cartsRoutes from './routes/cartsRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import jwtRoutes from './routes/jwtRoutes.js';
import emailRoutes from './routes/emailRouter.js';
import githubRoutes from './routes/gitHubRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("CoderSecret"));

initializePassport();
app.use(passport.initialize());


//rutas
app.use('/api/products',productsRoutes);
app.use('/api/carts',cartsRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/jwt',jwtRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/git', githubRoutes);

const PORT = 9090;
app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto " + config.port);
})