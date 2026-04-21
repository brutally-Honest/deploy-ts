import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:5173"],
}));

app.get("/api/hello", (req, res) => {
  res.json({ msg: "hello from backend" });
});

app.listen(5000, () => {
  console.log("running on 5000");
});