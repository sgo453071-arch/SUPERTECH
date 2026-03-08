import express from "express";
import { verifyAge } from "../controllers/verifyController.js";

const router = express.Router();

router.get("/verify", verifyAge);

export default router;