import { logger } from "../logger.js";

async function setHeaders(req, res, next) {
  let allowedOrigin = [];
  logger.info(process.env.NODE_ENV);
  switch (process.env.NODE_ENV) {
    case "Dev-Local":
    case "Dev-Cloud":
      allowedOrigin = [
        "https://localhost:5173",
        "https://bargat.vercel.app",
        "https://bargat-dev.jp.auth0.com",
      ];
      break;
    case "Prod":
      allowedOrigin = [
        "https://bargat.vercel.app",
        "https://bargat-dev.jp.auth0.com",
      ];
      break;
    default:
      logger.error("Invalid NODE_ENV value");
      break;
  }

  const origin = req.headers.origin;

  if (allowedOrigin.indexOf(origin) == -1) {
    res.status(403).send("Origin not allowed");
  } else {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", origin);
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    next();
  }
}

export default setHeaders;
