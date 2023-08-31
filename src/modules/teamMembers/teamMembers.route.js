import express from "express";
import { TeamMembersController } from "./teamMembers.controller";

const router = express.Router();

// get all team members information
router.get("/all-teamMembers", TeamMembersController.getAllTeamMembers);

export const TeamMembersRoutes = router;
