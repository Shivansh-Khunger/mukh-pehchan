import express from "express";

const router = express.Router();

import * as staffController from "../controllers/imgControllers.js";

router.post("/one", staffController.SingleImgValid);
router.post("/multi", staffController.MultiImgValid);

export default router;
