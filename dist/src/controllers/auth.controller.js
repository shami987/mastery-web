"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashed = await bcryptjs_1.default.hash(password, 10);
    const user = await User_1.default.create({
        name,
        email,
        password: hashed,
        role
    });
    res.status(201).json(user);
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User_1.default.findOne({ email });
    if (!user)
        return res.status(401).json({ message: "Invalid credentials" });
    const match = await bcryptjs_1.default.compare(password, user.password);
    if (!match)
        return res.status(401).json({ message: "Invalid credentials" });
    const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
};
exports.login = login;
