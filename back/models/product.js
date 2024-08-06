import { Schema, model } from "mongoose";

const schema = new Schema({
    name: String,
    url: String,
    description: String,
});

const modele = model('product', schema);

export default modele;