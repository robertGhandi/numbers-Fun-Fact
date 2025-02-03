import express from "express";
import compression from "compression";
import numberRoutes from "./routes/numberRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(compression());
app.use("/api/classify-number", numberRoutes);

export default app;
