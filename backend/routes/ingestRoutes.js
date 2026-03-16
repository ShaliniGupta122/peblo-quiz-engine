
import express from "express";
import multer from "multer";
import { ingestPDF } from "../controllers/ingestController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/ingest", upload.single("pdf"), ingestPDF);

export default router;
