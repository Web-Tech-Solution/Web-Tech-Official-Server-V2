import express from "express";
import { MeetLinksController } from "./meetLink.controller";

const router = express.Router();

//* Get daily scrum link
router.get("/daily-scrum/:id", MeetLinksController.getMeetLink);

export const MeetLinksRoutes = router;
