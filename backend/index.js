import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbconnect from "./utils/db.js";
import userRouter from "./routes/user.route.js";
import loginRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import logoutRouter from "./routes/user.route.js";

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

// api
app.use("/api/user", userRouter);
app.use("/api/user", loginRouter);
app.use("/api/user", logoutRouter);

// test route
app.get("/", (req, res) => {
  res.send("HELLO");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  dbconnect();
  console.log(`Server is running at http://localhost:${PORT}`);
});
