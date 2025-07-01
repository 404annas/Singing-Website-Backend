import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://classy-crumble-43db06.netlify.app",
    ],
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

import artistRoutes from "./routes/artistsRoutes.js";
app.use("/", artistRoutes);

import adminRoutes from "./routes/adminRoutes.js";
app.use("/", adminRoutes);

app.get("/", (req, res) => {
  res.send("This is Home Route");
});

// app.post("/test", (req, res) => {
//   console.log("BODY RECEIVED:", req.body);
//   res.json({ received: req.body });
// });

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
