import {
  createBlog,
  deleteBlogById,
  getBlogById,
  updateBlogById,
} from "../controllers/blog.controller.js";
import { getAllBlogs } from "../controllers/blog.controller.js";
import express from "express";

const router = express.Router();

router.route("/create").post(createBlog);
router.route("/getblog").get(getAllBlogs);
router.route("/getblog/:id").get(getBlogById);
router.route("/delete/:id").delete(deleteBlogById);
router.route("/update/:id").put(updateBlogById);

export default router;
