import express from 'express';
import morgan from 'morgan';

import './db.js';

import cartsRoutes from './routes/cartsRoutes.js';
import productsRoutes from './routes/productsRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/api/products',productsRoutes);
app.use('/api/carts',cartsRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server run on port: ${PORT}`);
    
})