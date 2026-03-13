import express from "express";

import logger from "./config/logger.js";
import type { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Typescript");
});

app.listen(3000, () => {
  console.log("Server running");
  logger.info("boobs")
});
