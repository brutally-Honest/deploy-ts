import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend.vercel.app"
  ]
}));

app.use((req, res, next) => {
  const start = Date.now();

  console.log(`--> ${req.method} ${req.url}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `<-- ${req.method} ${req.url} ${res.statusCode} | origin: ${req.headers.origin} | ${duration}ms`
    );

  });

  next();
});

app.get("/api/hello", (req, res) => {
  res.json({ msg: "hello from backend" });
});

app.listen(5000, () => {
  console.log("running on 5000");
});