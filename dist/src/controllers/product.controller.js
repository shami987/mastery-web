"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.createProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const createProduct = async (req, res) => {
    const product = await Product_1.default.create(req.body);
    res.status(201).json(product);
};
exports.createProduct = createProduct;
const getProducts = async (_req, res) => {
    const products = await Product_1.default.find();
    res.json(products);
};
exports.getProducts = getProducts;
