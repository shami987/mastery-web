// src/models/Product.ts
import mongoose, { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  category: string;
  quantity: number;
}

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
