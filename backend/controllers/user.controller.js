import { User } from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

// login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    // note change and update note delcare with const
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    // match password from data base pasword
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.status(400).json({
        message: "Incorrect Email or Password",
        success: false,
      });
    }

    // create token
    const tokenData = {
      userId: user._id,
    };

    // sign token
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    // ye step q kara
    user = {
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "User Login Successfully",
        success: true,
        user,
        token,
      });
  } catch (error) {
    console.log("Error in LoginUser", error);
  }
};
