"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// User routes
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.get("/products", auth_middleware_1.protect, product_controller_1.getProducts);
exports.default = router;
