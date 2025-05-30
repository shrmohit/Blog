import { User } from "../models/users.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // all data is required
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    // check user email for logging with same email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User aleady exists with this email",
        success: false,
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: passwordHash });

    return res.status(201).json({
      message: "User Register Successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error in registerUser", error);
  }
};
