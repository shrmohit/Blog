import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbconnect from "./utils/db.js";
import userRouter from "./routes/user.route.js";
import loginRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import logoutRouter from "./routes/user.route.js";
import blogRouter from "./routes/blog.route.js";
import blogAllPostRouter from "./routes/blog.route.js";
import blogByPostRouter from "./routes/blog.route.js";
import deleteblogRouter from "./routes/blog.route.js";
import updateblogRouter from "./routes/blog.route.js";

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

// file upload middleware
import fileUpload from "express-fileupload";
app.use(fileUpload());

// api for authentication
app.use("/api/user", userRouter);
app.use("/api/user", loginRouter);
app.use("/api/user", logoutRouter);

// api for blog
app.use("/api/blog", blogRouter);
app.use("/api/blog", blogAllPostRouter); // get all blogs
app.use("/api/blog", blogByPostRouter); // get blog by id
app.use("/api/blog", deleteblogRouter);
app.use("/api/blog", updateblogRouter); // update blog by id

// test route
app.get("/", (req, res) => {
  res.send("HELLO");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  dbconnect();
  console.log(`Server is running at http://localhost:${PORT}`);
});
