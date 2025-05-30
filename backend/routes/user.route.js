import { registerUser } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.route("/register").post(registerUser);

export default router;
