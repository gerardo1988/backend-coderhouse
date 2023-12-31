import mongoose from "mongoose";

const collection = 'users';

const schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email:{
        type: String,
        unique: true
    },
    age: Number,
    password: String,
    loggedBy: String,
    role:{
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    cart: [
        {
           type: mongoose.SchemaTypes.ObjectId,
           ref: 'Carts'
        }
    ]
});

 export const userModel = mongoose.model(collection,schema);