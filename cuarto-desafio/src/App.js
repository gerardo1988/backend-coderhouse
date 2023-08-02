import fs from 'fs';
import { Server } from 'socket.io';
import express from 'express';
import handlebars from 'express-handlebars'
import __dirname from './utils.js';
import productsRoutes from './routes/view.router.js';

const products =[];
const path= './products/products.json';

const listProduct = await fs.promises.readFile(path,"utf-8");
const listProductParse= JSON.parse(listProduct);
products.push(...listProductParse);


const app = express();
const PORT = 9090;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static(__dirname + '/public'))


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'handlebars');

app.use('/', productsRoutes);



const httpServer =app.listen(PORT, () => {
    console.log(`server run on port: ${PORT}`);
})

//traigo la información para guardar el producto.
const socketServer = new Server(httpServer);

socketServer.on('connection', socket =>{

    socket.on('prod', async data=>{
        products.push(data);
        await fs.promises.writeFile(path, JSON.stringify(products,null,2));

        //emito la lista actualizada
        socketServer.emit('listUpdate', products);

    })

});