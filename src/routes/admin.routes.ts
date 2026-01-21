// Admin routes
import { Router } from "express";
import { createProduct } from "../controllers/product.controller";
import { protect } from "../middlewares/auth.middleware";
import { adminOnly } from "../middlewares/role.middleware";

const router = Router();
router.post("/products", protect, adminOnly, createProduct);

export default router;
