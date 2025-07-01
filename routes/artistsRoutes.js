import express from "express";
import {
  createArtist,
  getArtist,
  updateArtist,
  deleteArtist,
} from "../controllers/artistController.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

const router = express.Router();

router.post("/createartist", verifyAdmin, createArtist);
router.get("/artists", getArtist);
router.put("/updateartist/:id", updateArtist);
router.delete("/deleteartist/:id", deleteArtist);

export default router;
