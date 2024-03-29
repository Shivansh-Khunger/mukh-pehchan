import express from "express";

import * as studentController from "../controllers/studentControllers.js";

const router = express.Router();

router.post("/regNew", studentController.regNewStu);
router.post("/att", studentController.updateAtt);

export default router;
