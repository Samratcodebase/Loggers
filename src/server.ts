import express from "express";
import { v4 as uuidV4 } from "uuid";
import { asyncLocalStorage } from "./Helper/request.helpers.js";
import logger from "./config/logger.js";
import type { NextFunction, Request, Response } from "express";
const app = express();
app.use(async (req: Request, res: Response, next: NextFunction) => {
  const correlationID = uuidV4();
  asyncLocalStorage.run({ correlationID }, () => {
    next();
  });
});
app.get("/", (req: Request, res: Response) => {
  logger.info("Hit on / Route");
  res.send("Hello Typescript");
});

app.listen(3000, () => {
  console.log("Server running");
  logger.info("boobs");
});
