import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const Schema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products" // Referencia al modelo Products
            }
        }
    ]
});

Schema.plugin(mongoosePaginate);

export const CartsModel = mongoose.model("Carts", Schema);