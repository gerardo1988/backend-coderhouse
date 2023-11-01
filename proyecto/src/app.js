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
//import jwtRoutes from './routes/jwtRoutes.js';
import initializePassport from './config/passport.config.js';
import emailRoutes from './routes/emailRouter.js';
import githubRoutes from './routes/gitHubRoutes.js';
import UsersExtendRouter from './routes/jwtRoutes.js';
import mockProducts from './routes/mockRoutes.js';
import loggerRoutes from './routes/loggerRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("CoderSecret"));
//app.use(addLogger);

initializePassport();
app.use(passport.initialize());

const userjwtRouter = new UsersExtendRouter();
//rutas
app.use('/mockingproducts', mockProducts);
app.use('/api/products',productsRoutes);
app.use('/api/carts',cartsRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/jwt',userjwtRouter.getRouter());
app.use('/api/email', emailRoutes);
app.use('/api/git', githubRoutes);
app.use('/loggerTest', loggerRoutes);



const PORT = config.port;
app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto " + config.port);
})