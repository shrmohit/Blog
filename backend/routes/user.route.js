import { loginUser, registerUser } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
export default router;
