"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Admin routes
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const router = (0, express_1.Router)();
router.post("/products", auth_middleware_1.protect, role_middleware_1.adminOnly, product_controller_1.createProduct);
exports.default = router;
