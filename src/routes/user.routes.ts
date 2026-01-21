// User routes
import { Router } from "express";
import { getProducts } from "../controllers/product.controller";
import { protect } from "../middlewares/auth.middleware";

const router = Router();
router.get("/products", protect, getProducts);

export default router;
