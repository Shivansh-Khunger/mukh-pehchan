import express from "express";
const router = express.Router();

router.post("/login", staffController.staffLogin);

export default router;
