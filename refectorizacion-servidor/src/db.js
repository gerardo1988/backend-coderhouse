import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri ='mongodb://127.0.0.1:27017/segunda-entrega';

mongoose.connect(
    uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default mongoose;