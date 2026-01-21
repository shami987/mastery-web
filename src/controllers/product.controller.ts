//Product Controller (Admin Restricted)
// src/controllers/product.controller.ts
import { Request, Response } from "express";
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const getProducts = async (_req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};
