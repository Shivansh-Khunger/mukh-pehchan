import { logger } from "../logger.js";

import mongoose from "mongoose";

async function connectingToDb() {
  const uri = process.env.MONGO_URI;
  try {
    await mongoose.connect(uri).then(() => {
      logger.info("db connected !");
    });
  } catch (err) {
    logger.error(err, `-> an error has occured while connecting to the db!`);
  }
}

export default connectingToDb;
