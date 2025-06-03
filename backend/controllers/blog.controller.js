import { blogModel } from "../models/blog.model.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create blog
export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const file = req.files?.file; // Optional chaining to avoid crash if files is undefined

    // ✅ Validation
    if (!title || !description || !file) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // ✅ Define upload path (ensure the 'uploads' folder exists)
    const uploadDir = path.join(__dirname, "../uploads/");
    const uploadPath = path.join(uploadDir, file.name);

    // ✅ Save the file to the server
    file.mv(uploadPath, (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res
          .status(500)
          .json({ message: "File upload failed", success: false });
      }
    });

    // ✅ Create and save blog post (store only file name or path)
    const blog = new blogModel({
      title,
      description,
      image: file.name, // or use `uploadPath` if you want full path
    });

    await blog.save();

    return res.status(201).json({
      message: "Blog created successfully",
      success: true,
      blog,
    });
  } catch (error) {
    console.error("Blog creation error:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

// get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    if (!blogs) {
      return res.status(404).json({
        message: "blogs not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "found all blogs",
      blogCount: blogs.length,
      success: true,
      blogs,
    });
  } catch (error) {
    console.log(error);
  }
};

// get blog by id means get single blog
export const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    if (!blogId) {
      return res.status(404).json({
        message: "Blog Id not found",
      });
    }
    const blog = await blogModel.findById(blogId);
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found by Id",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Blog found blog by Id",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete blog by id
export const deleteBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await blogModel.findByIdAndDelete(blogId);
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Blog deleted successfully",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
  }
};

// update blog by id
export const updateBlogById = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const blogId = req.params.id;

    const blogUpdateData = {
      title,
      description,
      image,
    };
    const blog = await blogModel.findByIdAndUpdate(blogId, blogUpdateData, {
      new: true,
    });
    if (!blog) {
      return res.status(404).json({
        message: "Blog not  found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Blog Update successfully",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
  }
};
