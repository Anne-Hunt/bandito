import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    title: String,
    price: Number,
    description: String
});

export const Product = model("Product", ProductSchema);
