import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    blog: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogModel", // Reference to the blog model
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("User", userSchema);
