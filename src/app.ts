import express from "express";
import config from "./config";
import { route } from "./routes/language.routes";

const app = express();
app.use(express.json());
app.use("/api/language", route);
app.set("port", config.port);

export default app;
