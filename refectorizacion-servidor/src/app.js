import express from 'express';
import __dirname from './utils.js';
import config from './config/config.js';

//rutas
import cartsRoutes from './routes/cartsRoutes.js';
import productsRoutes from './routes/productsRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products',productsRoutes);
app.use('/api/carts',cartsRoutes);

const PORT = 9090;
app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto " + config.port);
})