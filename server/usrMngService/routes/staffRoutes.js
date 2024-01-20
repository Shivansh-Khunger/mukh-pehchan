import express from "express";

import * as staffController from "../controllers/staffControllers.js";

const router = express.Router();

router.post("/login", staffController.staffLogin);

export default router;
