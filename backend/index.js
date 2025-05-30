import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//middlewares
const corsOptions = {
  oriigin: "http://localhost:5173/",
  methods: "GET,POST,CREATE,UPDATE,DELETE,READ",
  credential: true,
};

app.use(cors(corsOptions));

// api
app.get("/", (req, res) => {
  res.send("HELLO");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
