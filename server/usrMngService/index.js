import { logger, httpLogger } from "./logger.js";
import connectingToDb from "./config/db.js";
import setHeaders from "./config/headers.js";

import studentRoutes from "./routes/studentRoutes.js";

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

app.use("/s", studentRoutes);
