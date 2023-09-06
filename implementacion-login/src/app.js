import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

import session from 'express-session';
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose';


import viewsRouter from './routes/views.router.js';
import usersViewRouter from './routes/users.views.router.js';
import sessionsRouter from './routes/sessions.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


const MONGO_URL = "mongodb://127.0.0.1:27017/implementacion-login?retryWrites=true&w=majority";

app.use(session({
    store: MongoStore.create({
        mongoUrl: MONGO_URL,
        ttl: 10
    }),

    secret: "coderS3cr3t",
    resave: false,
    saveUninitialized: true,
}));

app.use("/", viewsRouter);
app.use("/users", usersViewRouter);
app.use("/api/sessions", sessionsRouter);



const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});


const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();
