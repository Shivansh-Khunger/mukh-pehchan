import { logger } from "../logger.js";
import * as faceapi from "face-api.js";

async function loadAiModels() {
  try {
    await faceapi.nets.tinyFaceDetector.loadFromDisk("./weights");
    // await faceapi.nets.tinyFaceDetector.loadFromUri(
    //   "https://github.com/justadudewhohacks/face-api.js/tree/master/weights/"
    // );

    logger.info("AI models loaded successfully");
  } catch (err) {
    logger.error(err, "Error loading AI models:");
  }
}

export default loadAiModels;
