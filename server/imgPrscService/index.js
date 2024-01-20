import { logger, httpLogger } from "./logger.js";
import connectingToDb from "./config/db.js";
import setHeaders from "./config/headers.js";
import hashPassword from "./helper/hashPassword.js";

// logger.info(await hashPassword("polyphasic"));

import studentRoutes from "./routes/studentRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";

import express from "express";
import "dotenv/config";

// enviorment variables
const PORT = process.env.PORT || 3001;

// initialising app
const app = express();

// jargon
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// adding the logger
app.use(httpLogger);

// setting headers
app.use(setHeaders);

// connecting to the database
await connectingToDb();

app.listen(PORT, () => {
  logger.info(`-> now listening at http://localhost:${PORT}/`);
});

app.get("/", (req, res) => {
  res.send("welcome to barGAt base.");
});

app.use("/s", studentRoutes);
app.use("/st", staffRoutes);
