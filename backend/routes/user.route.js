import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
export default router;
