import winston from "winston";
import { getCorrelationID } from "../Helper/request.helpers.js";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.printf(({ timeStamp, level, message, ...data }) => {
      const output = {
        level,
        timeStamp,
        CorrelationID: getCorrelationID(),
        message,
        data,
      };
      return JSON.stringify(output);
    }),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export default logger;
