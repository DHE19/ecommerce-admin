import { Schema, Document, model, models } from "mongoose";

interface IProduct extends  Document{
    title:string;
    description:string;
    price:number;
}

const productSchema = new Schema({
    title:{type: String, required: true},
    description:String,
    price:{type: Number, required:true},
})

const Product = models.Product || model<IProduct>("Product", productSchema);

export default Product;