import mongoose from "mongoose";

const collection = 'products';

const Schema = new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
    },
    code:{
        type: String,
    },
    stock:{
        type: Number,
    },

});

const productModel = mongoose.model(collection, Schema);
export default productModel;