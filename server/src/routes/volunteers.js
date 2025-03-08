import express from "express";
import { getVolunteers } from "../controllers/volunteersController";

const router = express.Router();

router.get("/", getVolunteers);
// router.post("/add", addVolunteer);

export default router;
