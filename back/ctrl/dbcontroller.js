import UserModel from "../models/product.js";
import mongoose from "mongoose";
const db = mongoose.connection;

const findItems = async () => {
    const item = await UserModel.find({});
    return item;  
}

export { findItems };
